import React, {
    ReactNode, useEffect, useLayoutEffect, useMemo, useState,
} from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";
import { useJsonSettings } from "@/entities/User";

interface ThemeProviderProps {
    initialTheme?: Theme,
    children?: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {theme: defaultTheme = Theme.LIGHT} = useJsonSettings()

    const { initialTheme, children } = props;

    const [isThemeInitiated, setIsThemeInitiated] = useState(false);

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useLayoutEffect(() => {
        if (isThemeInitiated) return;

        setTheme(defaultTheme)
        setIsThemeInitiated(true)
    }, [defaultTheme, isThemeInitiated]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );

};

export default ThemeProvider;
