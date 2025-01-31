import { classNames } from "@/shared/lib/classNames/classNames";

import { Article, ArticleView } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import { Icon } from "@/shared/ui/Icon/Icon";
import Home from "@/shared/assets/icons/home.svg";
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { ArticleBlockType, ArticleTextBlock } from "@/entities/Article/model/types/article";
import { ArticleTextBlockComponent } from "@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { HTMLAttributeAnchorTarget, useCallback } from "react";
import { RouterPath } from "@/shared/config/routeConfig/routeConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import cls from "./ArticleListItem.module.scss";
import {AppImage} from "@/shared/ui/AppImage/AppImage";
import {Skeleton} from "@/shared/ui/Skeleton/Skeleton";

interface ArticleListItemProps {
	className?: string,
	article: Article,
	view: ArticleView,
    target?: HTMLAttributeAnchorTarget
}


export const ArticleListItem = ({
    className, article, view, target,
}: ArticleListItemProps) => {
    const types = <Text text={article.type.join(", ")} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={Home} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={`${RouterPath.articles}/${article.id}`} className={cls.footerWrapper}>
                            <Button theme={ButtonTheme.SECONDARY}>Читать далее...</Button>
                            {views}
                        </AppLink>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={`${RouterPath.articles}/${article.id}`}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </>
            </Card>
        </AppLink>
    );
};
