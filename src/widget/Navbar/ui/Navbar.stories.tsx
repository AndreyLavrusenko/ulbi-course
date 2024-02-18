import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "widget/Navbar",
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const NavbarStory: Story = {
    name: "Default",
    args: {},
};


export const NavbarStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


NavbarStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
