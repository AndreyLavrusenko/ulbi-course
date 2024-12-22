import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "shared/ui/Stack/Flex/Flex";

const meta: Meta<typeof Flex> = {
    title: "shared/Flex",
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;


export const Row: Story = {
    args: {
        children: (
            <>
                <div>Text 1</div>
                <div>Text 2</div>
            </>
        ),
        direction: "row",
    },
};

export const RowGap8: Story = {
    args: {
        children: (
            <>
                <div>Text 1</div>
                <div>Text 2</div>
            </>
        ),
        direction: "row",
        gap: "8",
    },
};

export const RowGap32: Story = {
    args: {
        children: (
            <>
                <div>Text 1</div>
                <div>Text 2</div>
            </>
        ),
        direction: "row",
        gap: "32",
    },
};

export const Column: Story = {
    args: {
        children: (
            <>
                <div>Text 1</div>
                <div>Text 2</div>
            </>
        ),
        direction: "column",
    },
};


