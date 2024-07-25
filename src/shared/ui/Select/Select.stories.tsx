import { Meta, StoryObj } from "@storybook/react";
import { Select } from "shared/ui/Select/Select";

const meta: Meta<typeof Select> = {
    title: "shared/Select",
    component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Заголовок",
        options: [
            { value: "1", content: "123" },
            { value: "2", content: "4234" },
            { value: "3", content: "5745" },
        ],
    },
};
