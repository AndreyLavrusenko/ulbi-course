import { 
    memo, ReactNode, useCallback, useEffect, 
} from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import { useTheme } from "@/app/providers/ThemeProvider";
import { Portal } from "@/shared/ui/Portal/Portal";
import { Overlay } from "@/shared/ui/Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { AnimationProvider, useAnimationLibs } from "@/shared/lib/components/AnimationProvider";
import { Loader } from "@/shared/ui/Loader/Loader";
import cls from "./Drawer.module.scss";

interface DrawerProps {
	className?: string
	children: ReactNode,
	isOpen?: boolean,
	onClose?: () => void,
	lazy?: boolean
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const { theme } = useTheme();
    const { isMounted, close: closeHandler, isClosing } = useModal({ animationDelay: 350, isOpen, onClose });

    const mods: Mods = {
        [cls.Opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: {
                ...Spring.config.stiff, velocity,
            },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (lazy && !isMounted) {
        return null;
    }

    const display = y.to((py) => (py < height ? "block" : "none"));

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, "app_drawer"])}>
                <Overlay onClick={closeHandler} />
                <Spring.animated.div
                    className={cls.Sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.animated.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return <Loader />;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
