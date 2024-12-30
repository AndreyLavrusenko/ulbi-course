import { ArticleList } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticleAdapter } from "pages/ArticlesPage";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { Text } from "shared/ui/Text/Text";


interface ArticleInfiniteListProps {
	className?: string
}


export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const articles = useSelector(getArticleAdapter.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        return <Text title="Произошла ошибка" />;
    }
    
    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
