import { classNames } from "shared/lib/classNames/classNames";

import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "entities/Article/model/store/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from "entities/Article";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import HomeIcon from "shared/assets/icons/home.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";


interface ArticleDetailsProps {
	className?: string
    id: string
}


export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.avatar}>
                <Skeleton className={cls.avatar} border="50%" width={200} height={200} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                title="Произошла ошибка при загрузке статьи"
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar src={article?.img} size={200} className={cls.avatar} />
                </div>

                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <div className={cls.articleInfo}>
                    <Icon Svg={HomeIcon} />
                    <Text text={String(article?.views)} />
                </div>

                <div className={cls.articleInfo}>
                    <Icon Svg={HomeIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </div>
        );
    }

    return (
        <div>{content}</div>
    );
});
