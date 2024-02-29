import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/StoreDecorator";
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

NavbarStory.decorators = [StoreDecorator({})];


export const NavbarStoryDark: Story = {
    name: "Dark theme",
    args: {},
};


NavbarStoryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];


export const NavbarLogoutStory: Story = {
    name: "Logout",
    args: {},
};

NavbarLogoutStory.decorators = [StoreDecorator({
    user: {
        authData: {
            id: 1,
            username: "Andrew",
        },
    },
})];
