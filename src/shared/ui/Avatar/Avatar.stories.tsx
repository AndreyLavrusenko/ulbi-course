import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

const meta: Meta<typeof Avatar> = {
    title: "shared/Avatar",
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/UnionShop/img/169425176296028202.png",
        size: 140,
    },
};
