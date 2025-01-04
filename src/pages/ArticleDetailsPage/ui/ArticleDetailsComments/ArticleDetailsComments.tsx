import { Text, TextSize } from "@/shared/ui/Text/Text";
import { AddCommentForm } from "@/features/AddCommentForm";
import { CommentList } from "@/entities/Comment";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchCommentsByArticleId,
} from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsLoading } from "../../model/selectors/comments";
import {
    addCommentForArticle,
} from "../../model/services/addCommentForArticle/addCommentForArticle";
import cls from "./ArticleDetailsComments.module.scss";

interface ArticleDetailsCommentsProps {
    id: string
}

export const ArticleDetailsComments = ({ id }: ArticleDetailsCommentsProps) => {
    const dispatch = useAppDispatch();
	
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [id, dispatch]);
	
    return (
        <div className={cls.ArticleDetailsComments}>
            <Text
                size={TextSize.L}
                title="Комментарии"
                className={cls.CommentTitle}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
    );
};
