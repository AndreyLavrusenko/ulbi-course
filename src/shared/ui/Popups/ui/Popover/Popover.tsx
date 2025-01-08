import { Popover as HPopover } from "@headlessui/react";
import React, { ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DropDownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "@/shared/ui/Popups/styles/const";
import cls from "./Popover.module.scss";
import popupCls from "../../styles/popup.module.scss";

interface PopoverProps {
	className?: string,
	directionDropDown?: DropDownDirection,
	trigger: ReactNode,
	children: ReactNode,
}

export function Popover(props: PopoverProps) {
    const {
        className, trigger, directionDropDown = "bottom right", children, 
    } = props;

    const menuClasses = [mapDirectionClass[directionDropDown]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.ButtonTrigger}>{trigger}</HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.Panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
