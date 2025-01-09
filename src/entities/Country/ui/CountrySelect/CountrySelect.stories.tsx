import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "@/entities/Country";

const meta: Meta<typeof CountrySelect> = {
    title: "entities/CountrySelect",
    component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
