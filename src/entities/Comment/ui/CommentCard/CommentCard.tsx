import { classNames } from "@/shared/lib/classNames/classNames";
import { Comment } from "@/entities/Comment";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import cls from "./CommentCard.module.scss";
import { getRouteProfile } from "@/shared/const/router";


interface CommentCardProps {
    className?: string,
    comment: Comment,
    isLoading?: boolean,
}


export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.Header}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton className={cls.Username} width={80} height={16} />
                </div>
                <Skeleton className={cls.Text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.Header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <Text className={cls.Username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.Text} text={comment.text} />
        </div>
    );
};
