import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlePageReducer } from "@/pages/ArticlesPage";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/widget/Page/Page";
import { fetchNextArticlePage } from "@/pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { initArticlesPage } from "@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";
import { ArticlePageFilter } from "@/pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter";
import { ArticleInfiniteList } from "@/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList";
import cls from "./ArticlesPage.module.scss";
import { ArticlePageGreeting } from "@/features/articlePageGreeting";


interface ArticlesPageProps {
	className?: string
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

export const PAGE_ID = "PAGE_ID";

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);


    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlePageFilter />
                <ArticleInfiniteList className={cls.list} />
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
