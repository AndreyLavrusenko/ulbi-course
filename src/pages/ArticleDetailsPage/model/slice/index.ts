import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { articleDetailsPageRecommendationsReducer } from "@/pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice";
import { articleDetailsCommentsReducer } from "@/pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice";

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsPageRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
