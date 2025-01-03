import { classNames } from "shared/lib/classNames/classNames";
import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { DropDownDirection } from "shared/types/ui";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { mapDirectionClass } from "shared/ui/Popups/styles/const";
import cls from "./DropDown.module.scss";
import popupCls from "../../styles/popup.module.scss";

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

export const DropDown = (props: DropDownProps) => {
    const {
        className, trigger, items, directionDropDown = "bottom right",
    } = props;

    const menuClasses = [mapDirectionClass[directionDropDown]];

    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.ButtonTrigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.Menu, {}, menuClasses)}>

                {items.map((item, index) => {
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
                            <Menu.Item as={AppLink} key={index} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
