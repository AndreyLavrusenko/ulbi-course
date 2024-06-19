import React from "react";
import { RouterPath } from "shared/config/routeConfig/routeConfig";

import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/home.svg";

export interface SidebarItemType {
	path: string,
	text: string,
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RouterPath.profile,
        Icon: AboutIcon,
        text: "Профиль",
    },
];
