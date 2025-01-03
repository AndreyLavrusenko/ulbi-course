import { classNames } from "shared/lib/classNames/classNames";

import { useNotifications } from "entities/Notification/api/notificationApi";
import { VStack } from "shared/ui/Stack";
import { NotificationItem } from "entities/Notification/ui/NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import cls from "./NotificationList.module.scss";


interface NotificationListProps {
	className?: string
}


export const NotificationList = ({ className }: NotificationListProps) => {
    const { data: notifications, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" border="8px" height={80} />
                <Skeleton width="100%" border="8px" height={80} />
                <Skeleton width="100%" border="8px" height={80} />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {notifications?.map((notification) => (
                <NotificationItem key={notification.id} item={notification} />
            ))}
        </VStack>
    );
};
