import { classNames } from "shared/lib/classNames/classNames";

import React, {
    InputHTMLAttributes, memo, useCallback, useEffect, useRef,
} from "react";
import cls from "./Input.module.scss";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string,
	value?: string,
	onChange?: (value: string) => void,
    autoFocus?: boolean
}


export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        placeholder,
        type = "text",
        autoFocus,
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


    return (
        <div>
            <input
                ref={inputRef}
                className={classNames(cls.Input, {}, [className])}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
