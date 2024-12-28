import { classNames } from "shared/lib/classNames/classNames";
import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { DropDownDirection } from "shared/types/ui";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./DropDown.module.scss";

export interface DropDownItem {
    disabled?: boolean
    content?: ReactNode,
    onClick?: () => void,
    href?: string,
}

interface DropDownProps {
    className?: string,
    items: DropDownItem[],
    directionDropDown?: DropDownDirection,
    trigger: ReactNode
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    "bottom left": cls.OptionBottomLeft,
    "bottom right": cls.OptionBottomRight,
    "top left": cls.OptionTopLeft,
    "top right": cls.OptionTopRight,
};

export const DropDown = (props: DropDownProps) => {
    const {
        className, trigger, items, directionDropDown = "bottom right",
    } = props;

    const menuClasses = [mapDirectionClass[directionDropDown]];

    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className])}>
            <Menu.Button className={cls.Button}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.Menu, {}, menuClasses)}>

                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.Item, { [cls.active]: active })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
