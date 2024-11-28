import { classNames, Mods } from "shared/lib/classNames/classNames";

import React, {
    InputHTMLAttributes, memo, useCallback, useEffect, useRef,
} from "react";
import cls from "./Input.module.scss";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
    className?: string,
	value?: string | number,
	onChange?: (value: string) => void,
    autoFocus?: boolean,
    readOnly?: boolean
}


export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        placeholder,
        type = "text",
        autoFocus,
        readOnly,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const focusInput = useCallback(() => {
        if (inputRef.current && autoFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    useEffect(() => {
        focusInput();
    }, [focusInput]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };


    return (

        <input
            ref={inputRef}
            className={classNames(cls.Input, mods, [className])}
            placeholder={placeholder}
            type={type}
            readOnly={readOnly}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});
