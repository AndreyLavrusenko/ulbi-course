import webpack from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { buildSvgLoaders } from "../build/loaders/buildSvgLoaders";


export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: any) => {
        if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(buildSvgLoaders());
    config.module.rules.push(buildCssLoaders(true));

    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
