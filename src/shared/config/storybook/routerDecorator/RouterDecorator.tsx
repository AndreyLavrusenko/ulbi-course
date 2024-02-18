import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story: Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
