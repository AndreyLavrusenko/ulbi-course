import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "widget/ThemeSwitcher";
import { LangSwitcher } from "widget/LangSwitcher";

import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";

import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/home.svg";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

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
                <AppLink
                    className={cls.nav}
                    theme={AppLinkTheme.PRIMARY}
                    to={RouterPath.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.navLink}>
                        Главная страница
                    </span>
                </AppLink>

                <AppLink
                    className={cls.nav}
                    to={RouterPath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.navLink}>
                        О сайте
                    </span>
                </AppLink>
            </div>


            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short />
            </div>
        </div>
    );

};
