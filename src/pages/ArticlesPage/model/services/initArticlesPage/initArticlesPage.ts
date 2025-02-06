import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { articlePageActions } from "@/pages/ArticlesPage";
import { fetchArticleList } from "@/pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { getArticlePageInited } from "@/pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { ArticlesSortField } from "@/entities/Article";
import { SortOrder } from "@/shared/types";
import { ArticleType } from "@/entities/Article/model/types/article";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articlePage/initArticlesPage", async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlePageInited(getState());

    if (inited) return;

    const orderFromUrl = searchParams.get("order") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticlesSortField;
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type") as ArticleType;

    if (orderFromUrl) {
        dispatch(articlePageActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
        dispatch(articlePageActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
        dispatch(articlePageActions.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
        dispatch(articlePageActions.setType(typeFromUrl));
    }

    dispatch(articlePageActions.initialState());
    dispatch(fetchArticleList({}));
});
