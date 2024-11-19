import { classNames } from "shared/lib/classNames/classNames";

import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleImageBlockComponent.module.scss";


interface ArticleImageBlockComponentProps {
	className?: string
	block: ArticleImageBlock
}


export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} className={cls.img} alt="" />
        {block.title && <Text align={TextAlign.CENTER} text={block.title} />}
    </div>
);
