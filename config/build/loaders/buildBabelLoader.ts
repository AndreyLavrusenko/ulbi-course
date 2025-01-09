import { BuildOptions } from "../types/config";
import babelRemovePropsPlugin from "../babel/babelRemovePropsPlugin";

interface BuilderLoaderProps extends BuildOptions {
	isTsx?: boolean;
}

export const buildBabelLoader = (props: BuilderLoaderProps) => {
    const { isTsx, isDev } = props;

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "@babel/plugin-transform-typescript",
                        { isTSX: isTsx },
                    ],
                    "@babel/plugin-transform-runtime",
                    isTsx && [
                        babelRemovePropsPlugin,
                        { props: ["data-testid"] },
                    ],
                    isDev && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
            },
        },
    };
};
