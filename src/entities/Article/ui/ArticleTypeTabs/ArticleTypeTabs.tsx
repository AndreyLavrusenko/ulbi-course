import { classNames } from "shared/lib/classNames/classNames";

import { useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/types/article";
import cls from "./ArticleTypeTabs.module.scss";


interface ArticleTypeTabsProps {
	className?: string,
	value: ArticleType,
	onChangeTab: (type: ArticleType) => void
}


export const ArticleTypeTabs = ({ className, value, onChangeTab }: ArticleTypeTabsProps) => {
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: "Все",
        },
        {
            value: ArticleType.IT,
            content: "IT",
        },
        {
            value: ArticleType.ECONOMICS,
            content: "Экономика",
        },
        {
            value: ArticleType.SCIENCE,
            content: "Наука",
        },
    ], []);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeTab(tab.value as ArticleType);
    }, [onChangeTab]);
	
    return (
        <div className={classNames(cls.ArticleTypeTabs, {}, [className])}>
            <Tabs
                className={cls.Tabs}
                tabs={typeTabs}
                value={value}
                onTabLick={onTabClick}
            />
        </div>
    );
};
