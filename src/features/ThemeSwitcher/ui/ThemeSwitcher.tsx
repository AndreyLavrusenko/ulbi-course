import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

import LightIcon from "@/shared/assets/icons/sun.svg";
import DarkIcon from "@/shared/assets/icons/moon.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Theme } from "@/shared/const/theme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch()

    const toggleThemeHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({
                theme: newTheme
            }))
        });
    }, [toggleTheme, dispatch]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleThemeHandler}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
