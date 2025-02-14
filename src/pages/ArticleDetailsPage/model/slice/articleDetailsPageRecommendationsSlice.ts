import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import {
    ArticleDetailsRecommendationsSchema,
} from "@/pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendationsSchema";
import { Article } from "@/entities/Article";
import {
    fetchArticleRecommendations,
} from "@/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter
    .getSelectors<StateSchema>((state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState());

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

    },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
