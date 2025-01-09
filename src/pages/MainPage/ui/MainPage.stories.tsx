import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
    title: "page/MainPage",
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;


export const MainPageStory: Story = {
    name: "Default",
    args: {},
};


export const MainPageStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


MainPageStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
