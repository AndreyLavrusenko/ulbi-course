import { memo } from "react";
import { useSelector } from "react-redux";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "@/widget/Sidebar/model/types/sidebar";
import cls from "./SidebarItem.module.scss";
 

interface SidebarItemProps {
	item: SidebarItemType,
    collapsed: boolean
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }


    return (
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
    );
});
