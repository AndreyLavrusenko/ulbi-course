import { useSelector } from "react-redux";
import { useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { useGetArticleRating, useRateArticle } from "../model/api/articleRatingApi";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";


export interface ArticleRatingProps {
	articleId: string
}


const ArticleRating = ({ articleId }: ArticleRatingProps) => {
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? "" });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? "",
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (err) {
            console.error(err);
        }
    }, [userData?.id, articleId, rateArticleMutation]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={120} />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            title="Оцените статью"
            feedbackTitle="Оставьте отзыв о статье - это поможет улучшить качество"
            hasFeedback
        />
    );
};

export default ArticleRating;
