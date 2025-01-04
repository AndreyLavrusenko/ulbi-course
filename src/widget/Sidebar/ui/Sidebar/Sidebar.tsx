import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widget/ThemeSwitcher";
import { LangSwitcher } from "@/widget/LangSwitcher";

import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";

import { SidebarItem } from "@/widget/Sidebar/ui/SidebarItem/SidebarItem";
 
import { getSidebarItems } from "@/widget/Sidebar/model/selector/getSidebarItems";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const sidebarItemList = useSelector(getSidebarItems);

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {

        setCollapsed((prev) => !prev);

    };

    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
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

            <VStack role="navigation" className={cls.navItems} gap="8">
                {sidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        collapsed={collapsed}
                        item={item}
                    />
                ))}
            </VStack>


            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short />
            </div>
        </aside>
    );

});
