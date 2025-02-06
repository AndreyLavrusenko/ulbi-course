import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import MainIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

import { SidebarItemType } from "@/widget/Sidebar/model/types/sidebar";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const/router";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: "Главная страница",
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: "О нас",
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: AboutIcon,
                text: "Профиль",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: AboutIcon,
                text: "Статья",
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
