import { ArticleDetailsPageLazy } from "@/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.lazy";
import { type ArticleDetailsCommentSchema } from "@/pages/ArticleDetailsPage/model/types/ArticleDetailsCommentSchema";
import { type ArticleDetailsRecommendationsSchema } from "@/pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendationsSchema";
import { type ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage/model/types";
import { getCanUserEditArticle } from "@/pages/ArticleDetailsPage/model/selectors/article";

export {
    ArticleDetailsPageLazy as ArticleDetailsPage,
    ArticleDetailsCommentSchema,
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsPageSchema,
    getCanUserEditArticle,
};
