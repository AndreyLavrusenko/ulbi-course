import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildSvgLoaders } from "./loaders/buildSvgLoaders";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const { isDev } = options;

    const svgLoader = buildSvgLoaders();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean),
            },
        },
    };

    const updateComponents = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve("babel-loader"),
                options: {
                    plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean),
                },
            },
        ],
    };

    // Если не используем ts - нужен babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const cssLoaders = buildCssLoaders(isDev);

    return [
        babelLoader,
        updateComponents,
        typescriptLoader,
        cssLoaders,
        svgLoader,
        fileLoader,
    ];

}
