import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";

export const getArticleCommentsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.error;
