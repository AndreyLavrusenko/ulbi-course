import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Text.module.scss";

export enum TextTheme {
	DEFAULT = "default",
	ERROR = "error"
}

export enum TextAlign {
	RIGHT = "right",
	LEFT = "left",
	CENTER = "center"
}

export enum TextSize {
	S = "size_s",
	M = "size_m",
	L = "size_l",
}


interface TextProps {
    className?: string,
	title?: string,
	text?: string,
	theme?: TextTheme,
	align?: TextAlign,
	size?: TextSize,
}

type HeaderTag = "h1" | "h2" | "h3"

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
    [TextSize.S]: "h3",
    [TextSize.M]: "h2",
    [TextSize.L]: "h1",
};

export const Text = (props: TextProps) => {
    const {
        className, title, text, theme = TextTheme.DEFAULT, align = TextAlign.LEFT, size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
