import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { Button, ButtonSize, ButtonTheme } from "./Button";

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
        theme: ButtonTheme.CLEAR,
    },
};


export const Primary: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.PRIMARY,
    },
};


export const PrimaryDark: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.PRIMARY,
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const PrimaryDisabled: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.PRIMARY,
        disabled: true,
    },
};


export const Secondary: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.SECONDARY,
    },
};

export const SecondarySizeL: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.SECONDARY,
        size: ButtonSize.L,
    },
};


export const SecondaryDark: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.SECONDARY,
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const Background: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND,
    },
};


export const BackgroundDark: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND,
    },
};

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];


export const BackgroundInverted: Story = {
    args: {
        children: "TEXT",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};


export const Square: Story = {
    args: {
        children: "<",
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};


export const SquareMedium: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.M,
    },
};


export const SquareBig: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL,
    },
};
 
