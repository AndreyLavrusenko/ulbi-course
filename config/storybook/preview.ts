import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/themeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/routerDecorator/RouterDecorator";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
