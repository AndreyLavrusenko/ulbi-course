import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
    title: "shared/Code",
    component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;


export const CodeStory: Story = {
    name: "Default",
    args: {
        text: "const meta: Meta<typeof Code> = {\n"
            + "    title: \"shared/Code\",\n"
            + "    component: Code,\n"
            + "};\n"
            + "\n"
            + "export default meta;\n"
            + "type Story = StoryObj<typeof Code>;\n"
            + "\n"
            + "\n"
            + "export const CodeStory: Story = {\n"
            + "    name: \"Default\",\n"
            + "    args: {\n"
            + "        children: ,\n"
            + "    },\n"
            + "};",
    },
};

