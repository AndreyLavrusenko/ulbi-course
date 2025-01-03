import { Popover } from "shared/ui/Popups";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import Home from "shared/assets/icons/home.svg";
import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import { useCallback, useState } from "react";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { BrowserView, MobileView } from "react-device-detect";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";
import cls from "./NotificationButton.module.scss";


interface NotificationButtonProps {
	className?: string
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={Home} />
        </Button>
    );

    return (
        <>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>

            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    directionDropDown="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.Notifications} />
                </Popover>
            </BrowserView>

        </>
    );
};
