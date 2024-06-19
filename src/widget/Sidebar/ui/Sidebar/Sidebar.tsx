import { classNames } from "shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { ThemeSwitcher } from "widget/ThemeSwitcher";
import { LangSwitcher } from "widget/LangSwitcher";

import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

import { SidebarItemsList } from "widget/Sidebar/model/items";
import { SidebarItem } from "widget/Sidebar/ui/SidebarItem/SidebarItem";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {

        setCollapsed((prev) => !prev);

    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                theme={ButtonTheme.BACKGROUND}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={cls.navItems}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} collapsed={collapsed} item={item} />
                ))}
            </div>


            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short />
            </div>
        </div>
    );

});
