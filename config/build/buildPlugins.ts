import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import {BuildOptions} from "./types/config";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];

    if(isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins;
}