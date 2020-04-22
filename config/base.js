import {
    args
} from './cache';

import webpack from 'webpack';
import loaders from './loaders';
import * as utils from './utils';
const __DEV__ = args.mode === `development`;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const output = {
    filename: '[name].js',
    path: utils.resolve(`dist`)
}

const entry = {
    party: [
        `react`,
        `react-dom`,
        `react-router`
    ],
    app:utils.resolve(`src/index.tsx`)
}

const config = {
    module: {},
    resolve: {},
    plugins: [],
    entry: entry,
    output: output,
    mode: args.mode,
    devtool: `source-map`,
}

//loader
config.module.rules = loaders;


//设置后缀
config.resolve.extensions = [
    `.tsx`, `.ts`, `.js`, `.json`
]

config.plugins.push(
    new HtmlWebpackPlugin({
        template: utils.resolve(`tpl.html`)
    })
)

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: `css/[name]${__DEV__ ? `` : `-[contenthash:8]`}.css`
    })
)

//环境变量
config.plugins.push(
    new webpack.DefinePlugin({
        __DEV__:__DEV__
    })
)

export default config;