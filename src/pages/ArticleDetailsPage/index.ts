import { ArticleDetailsPageLazy } from "pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.lazy";
import { ArticleDetailsCommentSchema } from "pages/ArticleDetailsPage/model/types/ArticleDetailsCommentSchema";
import {
    ArticleDetailsRecommendationsSchema,
} from "pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendationsSchema";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage/model/types";
import { getCanUserEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";


export {
    ArticleDetailsPageLazy as ArticleDetailsPage,
    ArticleDetailsCommentSchema,
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsPageSchema,
    getCanUserEditArticle,
};
