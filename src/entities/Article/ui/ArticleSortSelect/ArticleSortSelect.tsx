import { classNames } from "@/shared/lib/classNames/classNames";

import { Select, SelectOption } from "@/shared/ui/Select/Select";
import { useMemo } from "react";
import { SortOrder } from "@/shared/types";
import { ArticlesSortField } from "@/entities/Article";
import cls from "./ArticleSortSelect.module.scss";


interface ArticleSortSelectProps {
	className?: string,
	sort: ArticlesSortField,
	order: SortOrder,
	onChangeOrder: (newOrder: SortOrder) => void,
	onChangeSort: (newOrder: ArticlesSortField) => void,
}


export const ArticleSortSelect = (props: ArticleSortSelectProps) => {
    const {
        sort, onChangeSort, onChangeOrder, order, className, 
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: "asc",
            content: "возрастанию",
        },
        {
            value: "desc",
            content: "убыванию",
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(() => [
        {
            value: ArticlesSortField.CREATED,
            content: "дате создания",
        },
        {
            value: ArticlesSortField.TITLE,
            content: "названию",
        },
        {
            value: ArticlesSortField.VIEWS,
            content: "популярности",
        },
    ], []);

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select
                onChange={onChangeSort}
                options={sortFieldOptions}
                value={sort}
                label="Сортровать по"
            />
            <Select
                onChange={onChangeOrder}
                options={orderOptions}
                value={order}
                label="по"
            />
        </div>
    );
};
