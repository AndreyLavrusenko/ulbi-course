import { classNames } from "@/shared/lib/classNames/classNames";

import { ArticleView } from "@/entities/Article";
import ListIcon from "@/shared/assets/icons/list.svg";
import TiledIcon from "@/shared/assets/icons/tiled.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import cls from "./ArticleViewSelector.module.scss";


interface ArticleViewSelectorProps {
	className?: string,
	view: ArticleView,
	onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
];


export const ArticleViewSelector = ({ className, onViewClick, view }: ArticleViewSelectorProps) => {

    const onClick = (newValue: ArticleView) => () => {
        onViewClick?.(newValue);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    className={classNames("", { [cls.notSelected]: viewType.view !== view })}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    );
};
