import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { PageError } from "./PageError";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof PageError> = {
    title: "widget/PageError",
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;


export const PageErrorStory: Story = {
    name: "Default",
    args: {},
};


export const PageErrorStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


PageErrorStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
