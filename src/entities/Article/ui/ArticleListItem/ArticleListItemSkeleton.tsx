import { classNames } from "@/shared/lib/classNames/classNames";

import { ArticleView } from "@/entities/Article";
import { Card } from "@/shared/ui/Card/Card";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cls from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
	className?: string,
	view: ArticleView
}


export const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton width="100%" height={180} className={cls.img} />
                    <Skeleton width="100%" height={100} className={cls.textBlock} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <>
                    <div className={cls.imageWrapper}>
                        <Skeleton width={200} height={200} className={cls.img} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </>
            </Card>
        </div>
    );
};
