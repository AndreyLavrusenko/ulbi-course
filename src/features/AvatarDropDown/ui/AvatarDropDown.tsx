import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { DropDown } from "@/shared/ui/Popups";
import { getUserAuthData, isUserAdmin, userActions } from "@/entities/User";
import cls from "./AvatarDropDown.module.scss";
import { RouterPath } from "@/shared/const/router";


interface AvatarDropDownProps {
	className?: string
}


export const AvatarDropDown = ({ className }: AvatarDropDownProps) => {
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <DropDown
            className={classNames(cls.AvatarDropDown, {}, [className])}
            directionDropDown="bottom left"
            items={[
                {
                    content: "Профиль",
                    href: RouterPath.profile + authData.id,
                },
                ...(isAdmin ? [{
                    content: "Админка",
                    href: RouterPath.admin_panel,
                }] : []),
                {
                    content: "Выйти",
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
};
