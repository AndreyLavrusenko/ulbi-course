import { ArticleDetails } from "entities/Article/ui/ArticleDetails/ArticleDetails";
import { type Article, ArticleView } from "entities/Article/model/types/article";
import { type ArticleDetailsSchema } from "entities/Article/model/store/types/articleDetailsSchema";
import { articleDetailsActions, articleDetailsReducer } from "entities/Article/model/store/slices/articleDetailsSlice";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from "entities/Article/model/store/selectors/articleDetails";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";

export {
    ArticleDetails,
    ArticleDetailsSchema,
    Article,
    ArticleView,
    articleDetailsActions,
    articleDetailsReducer,
    ArticleList,
    getArticleDetailsData,
    getArticleDetailsLoading,
    getArticleDetailsError,
};
