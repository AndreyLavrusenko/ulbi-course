import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
    title: "shared/Loader",
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;


export const LoaderStory: Story = {
    name: "Default",
    args: {},
};


export const LoaderStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


LoaderStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
