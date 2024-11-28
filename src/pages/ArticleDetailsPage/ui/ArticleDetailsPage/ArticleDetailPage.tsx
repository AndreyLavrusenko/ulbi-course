import { classNames } from "shared/lib/classNames/classNames";

import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text } from "shared/ui/Text/Text";
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
import { getArticleCommentsLoading } from "../../model/selectors/comments";
import cls from "./ArticleDetailPage.module.scss";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";


interface ArticleDetailPageProps {
	className?: string
}

const reducerList: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};


const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsLoading);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <Button onClick={onBackToList} theme={ButtonTheme.CLEAR}>Назад к списку</Button>
                <ArticleDetails id={id} />
                <Text title="Комментарии" className={cls.CommentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailPage;
