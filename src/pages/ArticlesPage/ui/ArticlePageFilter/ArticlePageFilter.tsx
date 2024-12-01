import { classNames } from "shared/lib/classNames/classNames";

import { ArticleViewSelector } from "features/ArticleViewSelector";
import { useSelector } from "react-redux";
import {
    getArticlePageOrder, getArticlePageSearch,
    getArticlePageSort, getArticlePageType,
    getArticlePageView,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { useCallback, useMemo } from "react";
import {
    ArticleSortSelect, ArticlesSortField, ArticleTypeTabs, ArticleView, 
} from "entities/Article";
import { articlePageActions } from "pages/ArticlesPage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";
import { fetchArticleList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/types/article";
import cls from "./ArticlePageFilter.module.scss";


interface ArticlePageFilterProps {
	className?: string
}


export const ArticlePageFilter = ({ className }: ArticlePageFilterProps) => {
    const dispatch = useAppDispatch();
    
    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({
            replace: true,
        }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeSort = useCallback((sort: ArticlesSortField) => {
        dispatch(articlePageActions.setSort(sort));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeTab = useCallback((tab: ArticleType) => {
        dispatch(articlePageActions.setType(tab));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);


    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.SortWrapper}>
                <ArticleSortSelect
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.Search}>
                <Input placeholder="Поиск" onChange={onChangeSearch} value={search} />
            </Card>
            <ArticleTypeTabs
                className={cls.Tabs}
                value={type}
                onChangeTab={onChangeTab}
            />

        </div>
    );
};
