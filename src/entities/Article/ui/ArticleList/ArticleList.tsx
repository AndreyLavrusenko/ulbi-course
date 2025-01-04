import { HTMLAttributeAnchorTarget } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Article, ArticleView } from "@/entities/Article";
import { ArticleListItemSkeleton } from "@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { Text } from "@/shared/ui/Text/Text";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";


interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget,
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));

export const ArticleList = ({
    className, articles, isLoading, view = ArticleView.SMALL, target,
}: ArticleListProps) => {

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title="Статьи не найдены" />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >

            {articles.map((article) => (
                <ArticleListItem
                    article={article}
                    view={view}
                    target={target}
                    key={article.id}
                    className={cls.card}
                />
            ))}


            {isLoading && getSkeletons(view)}
        </div>
    );
};
