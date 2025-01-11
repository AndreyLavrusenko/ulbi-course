import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Sidebar> = {
    title: "widget/Sidebar",
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;


export const SidebarStory: Story = {
    name: "Default",
    args: {},
};


export const SidebarStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


SidebarStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
