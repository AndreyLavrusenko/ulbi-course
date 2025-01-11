import { lazy, Suspense } from "react";
import { ArticleRatingProps } from "./ArticleRating";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const ArticleRatingAsync = lazy(() => import("./ArticleRating"));

export const ArticleRatingLazy = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ArticleRatingAsync {...props} />
    </Suspense>
);
