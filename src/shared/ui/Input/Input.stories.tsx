import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;


export const InputStory: Story = {
    name: "Default",
    args: {
        value: "Value в Input",
    },
};


export const InputStoryDark: Story = {
    name: "Dark theme",
    args: {
        value: "Value в Input",
    },
};

InputStoryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const InputStoryPlaceholder: Story = {
    name: "Placeholder",
    args: {
        placeholder: "Value в Input",
    },
};

export const InputStoryPlaceholderDark: Story = {
    name: "Placeholder Dark",
    args: {
        placeholder: "Value в Input",
    },
};

InputStoryPlaceholderDark.decorators = [ThemeDecorator(Theme.DARK)];
