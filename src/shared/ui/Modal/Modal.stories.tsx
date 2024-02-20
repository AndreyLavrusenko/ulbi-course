import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;


export const ModalStory: Story = {
    name: "Default",
    args: {
        children: "Я модальное окно",
        isOpen: true,
    },
};


export const ModalStoryDark: Story = {
    name: "Dark theme",
    args: {
        children: "Я модальное окно",
        isOpen: true,
    },
};


ModalStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
