import React, { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "entities/Country";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
	value?: Country,
	onChange?: (value: Country) => void,
	readOnly?: boolean,
	className?: string,
}

const options = [
    { value: Country.Belarus, content: "Беларусь" },
    { value: Country.Kazakhstan, content: "Казахстан" },
    { value: Country.Russia, content: "Россия" },
    { value: Country.Ukraine, content: "Украина" },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        value, onChange, readOnly, className,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            items={options}
            onChange={onChangeHandler}
            value={value}
            className={className}
            defaultValue="Укажите страну"
            label="Укажите страну"
            readonly={readOnly}
            directionDropDown="top"
        />
    );
});
