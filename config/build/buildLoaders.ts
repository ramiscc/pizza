import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }

    const svgLoader = {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/icons/[name][ext]'
        }
    }

    const fontsLoader = {
        test: /\.ttf$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name][ext]'
        }
    }

    return [typescriptLoader, cssLoader, svgLoader, fontsLoader]
}
