import React, { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency";
import { classNames } from "shared/lib/classNames/classNames";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
	value?: Currency,
	onChange?: (value: Currency) => void,
    readOnly?: boolean,
    className?: string,
}

const options = [
    { value: Currency.EUR, content: "Евро" },
    { value: Currency.RUB, content: "Рубли" },
    { value: Currency.USD, content: "Доллары" },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        value, onChange, readOnly, className, 
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            items={options}
            onChange={onChangeHandler}
            value={value}
            className={className}
            defaultValue="Укажите валюту"
            label="Укажите валюту"
            readonly={readOnly}
            directionDropDown="top right"
        />
    );
});
