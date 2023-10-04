import type { ResolveOptions as WebpackResolveOptions } from "webpack";
import {IBuildOptions} from "./types/config";

export function buildResolvers(options: IBuildOptions): WebpackResolveOptions {

    const {paths} = options

    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
