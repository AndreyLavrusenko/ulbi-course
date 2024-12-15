import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleDetailsCommentSchema } from "pages/ArticleDetailsPage";
import {
    fetchCommentsByArticleId,
} from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter
    .getSelectors<StateSchema>((state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState());

export const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
            
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
