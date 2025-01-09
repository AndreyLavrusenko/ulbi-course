import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story: Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
