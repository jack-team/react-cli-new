import webpack from 'webpack';
import { args } from './cache';
import loaders from './loaders';
import {resolve, chunkHash} from './utils';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __DEV__ = (
    args.env === `development`
)

const entry = {
    'app-in': resolve(`src/index.tsx`)
}

const output = {
    path: resolve(`dist`),
    filename: `js/[name]${chunkHash(__DEV__,`chunk`)}.js`
}

const config = {
    module: {},
    resolve: {},
    plugins: [],
    entry: entry,
    output: output,
    mode: args.mode,
    optimization: {},
    devtool: `source-map`
}

//loader
config.module.rules = loaders;

//设置后缀
config.resolve.extensions = [
    `.tsx`, `.ts`, `.js`, `.json`
]

config.plugins.push(
    new HtmlWebpackPlugin({
        template: resolve(`tpl.html`)
    })
)

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: `css/[name]${chunkHash(__DEV__,`content`)}.css`
    })
)

//环境变量
config.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: __DEV__
    })
)

//设置打包优化
const cacheGroups = {
    commons: {
        test: /src/,
        minChunks: 2,
        name: `commons`
    },
    libs: {
        name: `libs`,
        test: /node_modules/
    }
}

config.optimization.runtimeChunk = {
    name: `runtime`
}

config.optimization.splitChunks = {
    chunks: `all`,
    cacheGroups: cacheGroups
}

export default config;