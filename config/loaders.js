const loaders = [];
import { args } from '../utils/cache';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __DEV__ = (
    args.env === `development`
)

//ts转换
loaders.push({
    test: /\.tsx|ts$/,
    use: `ts-loader`,
    exclude: /node_modules/
})

//es6 转换
loaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: `happypack/loader?id=happyBabel`
})

//css 转换
const minCssLoader = {
    options: {
        hmr: __DEV__,
        esModule: true,
        reloadAll: __DEV__
    },
    loader: MiniCssExtractPlugin.loader
}

loaders.push({
    test: /\.(sc|c)ss$/,
    exclude: /node_modules/,
    loader: [
        minCssLoader,
        `happypack/loader?id=happySass`
    ]
})

//解析图片
loaders.push({
    test: /\.(jpe?g|png|gif)$/,
    loader:`happypack/loader?id=happyImg`
})

//解析字体
loaders.push({
    test: /\.(eot|ttf|woff|svg)$/,
    loader:`happypack/loader?id=happyFont`
})

export default loaders;