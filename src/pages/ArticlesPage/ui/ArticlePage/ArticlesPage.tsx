import { classNames } from "shared/lib/classNames/classNames";

import { ArticleList } from "entities/Article";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlePageReducer, getArticleAdapter } from "pages/ArticlesPage";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { Page } from "widget/Page/Page";
import { fetchNextArticlePage } from "pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { Text } from "shared/ui/Text/Text";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";
import { ArticlePageFilter } from "pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter";
import { useSearchParams } from "react-router-dom";
import cls from "./ArticlesPage.module.scss";


interface ArticlesPageProps {
	className?: string
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticleAdapter.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);


    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    if (error) {
        return <Text title="Произошла ошибка" />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlePageFilter />
                <ArticleList
                    className={cls.list}
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
