import { ButtonHTMLAttributes, FC } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
	CLEAR = "clear",
	PRIMARY = "primary",
	SECONDARY = "secondary",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "background_inverted"
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
	theme?: ButtonTheme,
	square?: boolean,
	size?: ButtonSize,
	disabled?: boolean,
	fullWidth?: boolean
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        theme = ButtonTheme.PRIMARY,
        children,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}

        </button>
    );

};
