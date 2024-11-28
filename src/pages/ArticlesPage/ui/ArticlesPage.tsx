import { classNames } from "shared/lib/classNames/classNames";

import { ArticleList, ArticleView } from "entities/Article";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlePageActions, articlePageReducer, getArticleAdapter } from "pages/ArticlesPage";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { useSelector } from "react-redux";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { ArticleViewSelector } from "features/ArticleViewSelector";
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

    useEffect(() => {
        dispatch(fetchArticleList());
        dispatch(articlePageActions.initialState());
    }, [dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
