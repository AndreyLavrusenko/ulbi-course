import React, { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import { Portal } from "@/shared/ui/Portal/Portal";
import { Overlay } from "@/shared/ui/Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import cls from "./Modal.module.scss";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

interface ModalProps {
    className?: string,
	children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className, isOpen, onClose, children, lazy,
    } = props;

    const { theme } = useTheme();
    const { isMounted, close, isClosing } = useModal({ animationDelay: ANIMATION_DELAY, isOpen, onClose });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, "app-modal"])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
