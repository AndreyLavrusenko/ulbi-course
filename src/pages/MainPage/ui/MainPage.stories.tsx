import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import MainPage from "./MainPage";
import { Theme } from "@/shared/const/theme";

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
