import { ArticleDetails } from "entities/Article/ui/ArticleDetails/ArticleDetails";
import { type Article, ArticlesSortField, ArticleView } from "entities/Article/model/types/article";
import { type ArticleDetailsSchema } from "entities/Article/model/store/types/articleDetailsSchema";
import { articleDetailsActions, articleDetailsReducer } from "entities/Article/model/store/slices/articleDetailsSlice";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from "entities/Article/model/store/selectors/articleDetails";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { ArticleSortSelect } from "entities/Article/ui/ArticleSortSelect/ArticleSortSelect";
import { ArticleTypeTabs } from "entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs";

export {
    ArticleDetails,
    ArticleDetailsSchema,
    Article,
    ArticlesSortField,
    ArticleView,
    articleDetailsActions,
    articleDetailsReducer,
    ArticleList,
    getArticleDetailsData,
    getArticleDetailsLoading,
    getArticleDetailsError,
    ArticleSortSelect,
    ArticleTypeTabs,
};
