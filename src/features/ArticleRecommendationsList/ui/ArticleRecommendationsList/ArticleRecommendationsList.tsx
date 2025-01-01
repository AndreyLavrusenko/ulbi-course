import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article";
import { VStack } from "shared/ui/Stack";
import { Loader } from "shared/ui/Loader/Loader";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
    className?: string; 
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;

    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || !articles || error) {
        return (
            <Loader />
        );
    }

    return (
        <VStack gap="8" className={classNames("", {}, [className])}>
            <Text
                size={TextSize.L}
                title="Рекомендуем"
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
});
