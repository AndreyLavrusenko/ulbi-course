import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlePageLimit } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

interface FetchArticleListProps {
    page?: number
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    "articlePage/fetchArticleList",
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());

        try {

            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
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
