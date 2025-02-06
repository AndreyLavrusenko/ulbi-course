import {
    ArticleDetailsCommentSchema,
    ArticleDetailsRecommendationsSchema,
} from "@/pages/ArticleDetailsPage";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
