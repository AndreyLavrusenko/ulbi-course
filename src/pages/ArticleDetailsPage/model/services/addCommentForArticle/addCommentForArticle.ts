import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "@/entities/Comment";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article";
import {
    fetchCommentsByArticleId,
} from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    "articleDetails/addCommentForArticle",
    async (text, thunkAPI) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue("Не все поля заполнены");
        }

        try {

            const response = await extra.api.post("/comments", {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;

        } catch (err) {
            return rejectWithValue("error");
        }
    },
);
