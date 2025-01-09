import { useState } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import Star from "@/shared/assets/icons/star.svg";

import cls from "./StarRating.module.scss";
import { Icon } from "@/shared/ui/Icon/Icon";


interface StarRatingProps {
	className?: string,
	onSelect?: (starsCount: number) => void,
	size?: number,
	selectedStars?: number,
}

const stars = [1, 2, 3, 4, 5];


export const StarRating = (props: StarRatingProps) => {
    const {
        className, selectedStars = 0, onSelect, size = 30,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };


    return (
        <div className={classNames("", {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={Star}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
