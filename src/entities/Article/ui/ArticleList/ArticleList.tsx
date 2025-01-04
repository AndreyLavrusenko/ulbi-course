import { classNames } from "@/shared/lib/classNames/classNames";

import { Article, ArticleView } from "@/entities/Article";
import { ArticleListItemSkeleton } from "@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { Text } from "@/shared/ui/Text/Text";
import { HTMLAttributeAnchorTarget } from "react";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { PAGE_ID } from "@/pages/ArticlesPage/ui/ArticlePage/ArticlesPage";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";


interface ArticleListProps {
	className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget,
    virtualized?: boolean,
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));

export const ArticleList = ({
    className, articles, isLoading, view = ArticleView.SMALL, target, virtualized = true,
}: ArticleListProps) => {

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    target={target}
                    article={articles[index]}
                    view={view}
                    className={cls.card}
                    key={articles[index].id}
                />,
            );
        }

        return (
            <div key={key} className={cls.row} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title="Статьи не найдены" />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width, height, registerChild, scrollTop, isScrolling, onChildScroll, 
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            <List
                                width={width ? width - 80 : 700}
                                height={height ?? 700}
                                rowHeight={isBig ? 700 : 330}
                                autoHeight
                                rowCount={rowCount}
                                rowRenderer={rowRenderer}
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((article) => (
                                <ArticleListItem article={article} view={view} target={target} key={article.id} className={cls.card} />
                            ))
                        )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
};
