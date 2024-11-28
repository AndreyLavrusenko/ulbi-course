import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";

import { SidebarItemType } from "widget/Sidebar/model/types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RouterPath.main,
                Icon: MainIcon,
                text: "Главная страница",
            },
            {
                path: RouterPath.about,
                Icon: AboutIcon,
                text: "О нас",
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RouterPath.profile + userData.id,
                    Icon: AboutIcon,
                    text: "Профиль",
                    authOnly: true,
                },
                {
                    path: RouterPath.articles,
                    Icon: AboutIcon,
                    text: "Статья",
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
