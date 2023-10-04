import {IBuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {WebpackConfiguration} from "webpack-cli";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): WebpackConfiguration {

    const {paths, mode} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true
        },
        module: {
            rules: buildLoaders()
        },
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        resolve: buildResolvers(options)
    }
}
