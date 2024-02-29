import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "shared/ui/Modal/Modal";
import LoginForm from "features/AuthByUsername/ui/LoginForm/LoginForm";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";


const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
};


export default meta;
type Story = StoryObj<typeof Modal>;


export const LoginFormStory: Story = {
    name: "Default",
};

LoginFormStory.decorators = [StoreDecorator({
    loginForm: {
        username: "123",
        password: "123",
    },
})];


export const LoginFormStoryDarkTheme: Story = {
    name: "Dark Theme",
};

LoginFormStoryDarkTheme.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: "123",
            password: "123",
        },
    })];


export const LoginFormStoryWithError: Story = {
    name: "Error",
};

LoginFormStoryWithError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: "123",
            password: "123",
            error: "Ошибка при входе",
        },
    })];


export const LoginFormStoryLoading: Story = {
    name: "Loading",
};

LoginFormStoryLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: "123",
            password: "123",
            isLoading: true,
        },
    })];
