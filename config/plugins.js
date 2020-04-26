import webpack from 'webpack';
import {args} from '../utils/cache';
import packImg from './pack.img';
import packScss from './pack.sass';
import packFont from './pack.font';
import packLabel from './pack.babel';
import resolve from './../utils/resolve';
import chunkHash from './../utils/chunkHash';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const plugins = [];

const __DEV__ = (
    args.env === `development`
)

plugins.push(
    packLabel(), packScss(),
    packImg(), packFont()
);

//环境变量
plugins.push(
    new webpack.DefinePlugin({
        __DEV__: __DEV__
    })
)

//设置模板位置
plugins.push(
    new HtmlWebpackPlugin({
        template: resolve(`tpl.html`)
    })
)

//提取css
plugins.push(
    new MiniCssExtractPlugin({
        filename: `css/[name]${chunkHash(__DEV__, `content`)}.css`
    })
)

export default plugins;