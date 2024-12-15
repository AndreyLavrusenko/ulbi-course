import { classNames } from "shared/lib/classNames/classNames";

import { ArticleDetails, ArticleList } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text, TextSize } from "shared/ui/Text/Text";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import {
    fetchCommentsByArticleId,
} from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/AddCommentForm";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widget/Page/Page";
import {
    getArticleRecommendations,
} from "pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";
import {
    fetchArticleRecommendations,
} from "pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";
import { getArticleCommentsLoading } from "../../model/selectors/comments";
import cls from "./ArticleDetailPage.module.scss";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";


interface ArticleDetailPageProps {
	className?: string
}

const reducerList: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};


const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsLoading);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    }, [id, dispatch]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                Статья не найдена
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducerList}>
            <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <Button onClick={onBackToList} theme={ButtonTheme.CLEAR}>Назад к списку</Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    title="Рекомендуем"
                    className={cls.CommentTitle}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendationsList}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    title="Комментарии"
                    className={cls.CommentTitle}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailPage;
