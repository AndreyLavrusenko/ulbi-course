import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleDetailsSchema } from "@/entities/Article";
import { fetchArticleById } from "@/entities/Article/model/store/services/fetchArticleById/fetchArticleById";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
};

export const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
