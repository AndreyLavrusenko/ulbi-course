import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { NotFoundPage } from "./NotFoundPage";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof NotFoundPage> = {
    title: "page/NotFoundPage",
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;


export const NotFoundPageStory: Story = {
    name: "Default",
    args: {},
};


export const NotFoundPageStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


NotFoundPageStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
