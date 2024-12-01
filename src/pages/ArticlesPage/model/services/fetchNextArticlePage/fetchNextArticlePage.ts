import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNumber,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { articlePageActions } from "pages/ArticlesPage";
import { fetchArticleList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    "articlePage/fetchNextArticlePage",
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const hasMore = getArticlePageHasMore(getState());
        const page = getArticlePageNumber(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticleList({}));
        }
		
    },
);
