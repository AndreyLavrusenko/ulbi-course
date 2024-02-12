import {classNames} from "shared/lib/classNames/classNames";

import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widget/ThemeSwitcher";


interface NavbarProps {
    className?: string
}


export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>Главная страница</AppLink>
                <AppLink to={"/about"}>О сайте</AppLink>
            </div>
        </div>
    )
}