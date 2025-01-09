import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
    getArticlePageLimit,
    getArticlePageNumber,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from "@/pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";
import { ArticleType } from "@/entities/Article/model/types/article";

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    "articlePage/fetchArticleList",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());
        const page = getArticlePageNumber(getState());
        const type = getArticlePageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;

        } catch (err) {
            return rejectWithValue("Ошибка при получении статей");
        }
    },
);
