import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import style from "./Select.module.scss";

interface SelectOption {
    value: string,
    content: string
}

interface Props {
	label?: string,
    options?: SelectOption[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean,
    className?: string
}

export const Select = memo(({
    label, options, value, onChange, readonly, className,
}: Props) => {
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
});
