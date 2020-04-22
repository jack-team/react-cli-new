import {
    args
} from './cache';

import loaders from './loaders';
import * as utils from './utils';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __DEV__ = args.mode === `development`;

const output = {
    filename: '[name].js',
    path: utils.resolve(`dist`)
}

const entry = (
    utils.resolve(`src/index.ts`)
)

const config = {
    module: {},
    resolve: {},
    plugins: [],
    entry: entry,
    output: output,
    mode: args.mode
}

//loader
config.module.rules = loaders;


//设置后缀
config.resolve.extensions = [
    `.tsx`, `.ts`, `.js`, `.json`
]

config.plugins.push(
    new HtmlWebpackPlugin()
)

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: `css/[name]${__DEV__ ? `` : `-[contenthash:8]`}.css`
    })
)

export default config;