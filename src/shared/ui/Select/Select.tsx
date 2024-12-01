import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import style from "./Select.module.scss";

export interface SelectOption<T extends string> {
    value: T,
    content: string
}

interface Props<T extends string> {
	label?: string,
    options?: SelectOption<T>[],
    value?: T,
    onChange?: (value: T) => void,
    readonly?: boolean,
    className?: string
}

export const Select = <T extends string>({
    label, options, value, onChange, readonly, className,
}: Props<T>) => {
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(() => (
        options?.map((item) => (
            <option
                className={style.Option}
                value={item.value}
                key={item.value}
            >
                {item.content}
            </option>
        ))
    ), [options]);

	
    return (
        <div className={classNames(style.Wrapper, {}, [className])}>
            {label && (
                <span className={style.Label}>
                    {label}
                </span>
            )}
            <select
                disabled={readonly}
                className={style.Select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
