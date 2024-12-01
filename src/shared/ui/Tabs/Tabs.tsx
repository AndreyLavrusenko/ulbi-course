import { classNames } from "shared/lib/classNames/classNames";

import { memo, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "shared/ui/Card/Card";
import cls from "./Tabs.module.scss";

export interface TabItem {
    value: string,
    content: ReactNode
}

interface TabsProps {
	className?: string
    tabs: TabItem[],
    value: string,
    onTabLick: (tab: TabItem) => void
}


export const Tabs = memo(({
    className, onTabLick, tabs, value, 
}: TabsProps) => {

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabLick(tab);
    }, [onTabLick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.Tab}
                    onClick={clickHandle(tab)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
