import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink",
    component: AppLink,
    args: {
        to: "/",
        children: "TEST TEXT",
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;


export const AppLinkStory: Story = {
    name: "Default",
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};


export const AppLinkStoryDark: Story = {
    name: "Dark theme",
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};


AppLinkStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
