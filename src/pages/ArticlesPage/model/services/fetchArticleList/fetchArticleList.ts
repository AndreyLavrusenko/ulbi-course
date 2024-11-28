import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "articlePage/fetchArticleList",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {

            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
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
