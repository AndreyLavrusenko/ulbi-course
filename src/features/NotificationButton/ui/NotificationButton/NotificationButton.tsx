import { Popover } from "shared/ui/Popups";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import Home from "shared/assets/icons/home.svg";
import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";


interface NotificationButtonProps {
	className?: string
}

export const NotificationButton = ({ className }: NotificationButtonProps) => (
    <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        directionDropDown="bottom left"
        trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={Home} />
            </Button>
        )}
    >
        <NotificationList className={cls.Notifications} />
    </Popover>
);
