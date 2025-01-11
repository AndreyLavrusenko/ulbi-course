import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator";
import { ModalStoryDark } from "@/shared/ui/Modal/Modal.stories";

const meta: Meta<typeof Skeleton> = {
    title: "shared/Skeleton",
    component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SkeletonStory: Story = {
    name: "Default",
    args: {
        width: "100%",
        height: 200,
    },
};

export const SkeletonStoryCircle: Story = {
    name: "Circle",
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
};

export const SkeletonStoryDark: Story = {
    name: "Circle Dark",
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
};

export const SkeletonStoryOrange: Story = {
    name: "Circle Orange",
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
};


SkeletonStoryDark.decorators = [ThemeDecorator(Theme.DARK)];
SkeletonStoryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
