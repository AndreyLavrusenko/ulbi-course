import { ArticlesPageLazy } from "pages/ArticlesPage/ui/ArticlePage/ArticlesPage.lazy";
import { ArticlePageSchema } from "pages/ArticlesPage/model/types/articlePageSchema";
import {
    articlePageActions,
    articlePageReducer,
    getArticleAdapter,
} from "pages/ArticlesPage/model/slices/articlePageSlice";

export {
    ArticlesPageLazy as ArticlesPage,
    ArticlePageSchema,
    articlePageReducer,
    articlePageActions,
    getArticleAdapter,
};
