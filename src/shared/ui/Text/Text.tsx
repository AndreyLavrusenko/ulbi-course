import { classNames, Mods } from "shared/lib/classNames/classNames";

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

interface TextProps {
    className?: string,
	title?: string,
	text?: string,
	theme?: TextTheme,
	align?: TextAlign
}

export const Text = (props: TextProps) => {
    const {
        className, title, text, theme = TextTheme.DEFAULT, align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
