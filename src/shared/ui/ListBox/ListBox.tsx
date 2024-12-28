import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import Select from "shared/assets/icons/utils/select.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { HStack } from "shared/ui/Stack";
import { DropDownDirection } from "shared/types/ui";
import cls from "./ListBox.module.scss";

export interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean
}

interface ListBoxProps {
    items: ListBoxItem[],
    className?: string,
    value?: string,
    defaultValue?: string,
    onChange: (value: string) => void,
    readonly?: boolean,
    directionDropDown?: DropDownDirection,
    label?: string
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    "bottom left": cls.OptionBottomLeft,
    "bottom right": cls.OptionBottomRight,
    "top left": cls.OptionTopLeft,
    "top right": cls.OptionTopRight,
};

export const ListBox = ({
    items, value, defaultValue, className, onChange, readonly, directionDropDown = "bottom left", label,
}: ListBoxProps) => {

    const optionsClasses = [mapDirectionClass[directionDropDown]];


    return (
        <HStack gap="8">
            <Text text={label} />
            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button disabled={readonly} className={cls.Trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.Options, {}, optionsClasses)}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.Item,
                                    { [cls.active]: active, [cls.selected]: selected, [cls.disabled]: item.disabled },
                                )}
                                >
                                    {item.content}
                                    {selected && <Icon Svg={Select} />}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
};
