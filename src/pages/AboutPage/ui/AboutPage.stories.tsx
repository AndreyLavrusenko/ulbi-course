import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import AboutPage from "./AboutPage";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AboutPage> = {
    title: "page/AboutPage",
    component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;


export const AboutPageStory: Story = {
    name: "Default",
    args: {},
};


export const AboutPageStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


AboutPageStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
