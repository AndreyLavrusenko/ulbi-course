import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widget/Sidebar/model/items";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";


interface SidebarItemProps {
	item?: SidebarItemType,
    collapsed: boolean
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
    <AppLink
        className={classNames(cls.nav, { [cls.collapsed]: collapsed })}
        theme={AppLinkTheme.PRIMARY}
        to={item.path}
    >
        <item.Icon className={cls.icon} />
        <span className={cls.navLink}>
            {item.text}
        </span>
    </AppLink>
));
