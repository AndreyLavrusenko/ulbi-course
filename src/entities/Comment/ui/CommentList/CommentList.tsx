import { classNames } from "shared/lib/classNames/classNames";

import { Text } from "shared/ui/Text/Text";
import { Comment } from "entities/Comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";


interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean,
}


export const CommentList = (props: CommentListProps) => {
    const { isLoading, className, comments } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment: Comment) => (
                    <CommentCard key={comment.id} comment={comment} isLoading={isLoading} className={cls.Comment} />
                ))
                : <Text text="Комментариев еще нет" />}
        </div>
    );
};
