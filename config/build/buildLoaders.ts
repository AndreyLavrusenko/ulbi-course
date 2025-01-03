import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildSvgLoaders } from "./loaders/buildSvgLoaders";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(props: BuildOptions): webpack.RuleSetRule[] {

    const { isDev } = props;

    const svgLoader = buildSvgLoaders();

    const codeBabelLoader = buildBabelLoader({ ...props, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...props, isTsx: true });

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
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
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    const cssLoaders = buildCssLoaders(isDev);

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        updateComponents,
        cssLoaders,
        svgLoader,
        fileLoader,
    ];

}
