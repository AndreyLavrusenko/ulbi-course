import { classNames } from "@/shared/lib/classNames/classNames";

import { Card, CardTheme } from "@/shared/ui/Card/Card";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { Notification } from "../../model/types/notifications";
import cls from "./NotificationItem.module.scss";


interface NotificationItemProps {
	className?: string,
	item: Notification
}


export const NotificationItem = (props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card theme={CardTheme.OUTLINE} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text size={TextSize.S} title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.Link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }


    return content;
};
