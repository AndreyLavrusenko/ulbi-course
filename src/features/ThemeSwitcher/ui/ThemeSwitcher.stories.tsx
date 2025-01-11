import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ThemeSwitcher> = {
    title: "widget/ThemeSwitcher",
    component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;


export const ThemeSwitcherStory: Story = {
    name: "Default",
};


export const ThemeSwitcherStoryDark: Story = {
    name: "Dark theme",
};


ThemeSwitcherStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
