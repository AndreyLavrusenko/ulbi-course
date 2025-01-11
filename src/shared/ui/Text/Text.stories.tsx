import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { Text, TextTheme } from "./Text";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;


export const TitleAndTextStory: Story = {
    name: "Title and Text",
    args: {
        title: "Title",
        text: "Text",
    },
};


export const TitleStory: Story = {
    name: "Title",
    args: {
        title: "Value в Text",
    },
};

export const TitleStoryDark: Story = {
    name: "Title Dark",
    args: {
        title: "Value в Text",
    },
};

TitleStoryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const TextStory: Story = {
    name: "Text",
    args: {
        text: "Value в Text",
    },
};


export const TextStoryDark: Story = {
    name: "Text Dark",
    args: {
        text: "Value в Text",
    },
};

TextStoryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const TitleAndTextStoryError: Story = {
    name: "Error",
    args: {
        theme: TextTheme.ERROR,
        title: "Title",
        text: "Text",
    },
};
