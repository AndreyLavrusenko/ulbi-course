import { ListBox, ListBoxItem } from "@/shared/ui/Popups/ui/ListBox/ListBox";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof ListBox> = {
    title: "shared/ListBox",
    component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const ListBoxStory: Story = {
    name: "Default",
    args: {
        defaultValue: "Выберите значение",
        value: undefined,
        onChange: () => {},
        items: [
            { value: "1", content: "Первое значение" },
            { value: "2", content: "Второе значение" },
            { value: "3", content: "Третье значение", disabled: true },
        ],
    },
};


export const ListBoxTopStory: Story = {
    name: "Default",
    args: {
        defaultValue: "Выберите значение",
        value: undefined,
        onChange: () => {},
        items: [
            { value: "1", content: "Первое значение" },
            { value: "2", content: "Второе значение" },
            { value: "3", content: "Третье значение", disabled: true },
        ],
        directionDropDown: "top left",
    },
};
