import { ArticleDetails } from "entities/Article/ui/ArticleDetails/ArticleDetails";
import { type Article } from "entities/Article/model/types/article";
import { type ArticleDetailsSchema } from "entities/Article/model/store/types/articleDetailsSchema";
import { articleDetailsActions, articleDetailsReducer } from "entities/Article/model/store/slices/articleDetailsSlice";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from "entities/Article/model/store/selectors/articleDetails";

export {
    ArticleDetails,
    ArticleDetailsSchema,
    Article,
    articleDetailsActions,
    articleDetailsReducer,
    getArticleDetailsData,
    getArticleDetailsLoading,
    getArticleDetailsError,
};
