import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlePageActions } from "pages/ArticlesPage";
import { fetchArticleList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { getArticlePageInited } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    "articlePage/initArticlesPage",
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlePageInited(getState());

        if (inited) return;

        dispatch(articlePageActions.initialState());
        dispatch(fetchArticleList({
            page: 1,
        }));

    },
);
