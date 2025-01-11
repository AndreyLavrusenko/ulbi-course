import "@/app/styles/index.scss";
import { Story } from "@storybook/react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
