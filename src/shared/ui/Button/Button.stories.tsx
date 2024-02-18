import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Clear: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.CLEAR,
    },
};


export const Primary: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.PRIMARY,
    },
};


export const PrimaryDark: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.PRIMARY,
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const Secondary: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.SECONDARY,
    },
};


export const SecondaryDark: Story = {
    args: {
        children: "TEXT",
        theme: ThemeButton.SECONDARY,
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
