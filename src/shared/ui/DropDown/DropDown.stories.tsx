import { Meta, StoryObj } from "@storybook/react";
import { DropDown } from "shared/ui/DropDown/DropDown";
import { Button } from "shared/ui/Button/Button";

const meta: Meta<typeof DropDown> = {
    title: "shared/DropDown",
    component: DropDown,
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const DropDownDefault: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            { content: "first" },
            { content: "second" },
            { content: "third" },
            { content: "four" },
        ],
    },
};
