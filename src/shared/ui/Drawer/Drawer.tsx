import { classNames, Mods } from "shared/lib/classNames/classNames";

import { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "shared/ui/Portal/Portal";
import { Overlay } from "shared/ui/Overlay/Overlay";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import cls from "./Drawer.module.scss";


interface DrawerProps {
	className?: string
	children: ReactNode,
	isOpen?: boolean,
	onClose?: () => void,
	lazy?: boolean
}


export const Drawer = memo((props: DrawerProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const { theme } = useTheme();
    const { isMounted, close, isClosing } = useModal({ animationDelay: 350, isOpen, onClose });

    const mods: Mods = {
        [cls.Opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, "app_drawer"])}>
                <Overlay onClick={close} />
                <div className={cls.Content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
