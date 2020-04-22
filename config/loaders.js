import {
    args
} from './cache';
const loaders = [];
const __DEV__ = args.mode === `development`;
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

//ts转换
loaders.push({
    test: /\.tsx|ts$/,
    use: `ts-loader`,
    exclude: /node_modules/
})

//es6转换
loaders.push({
    test: /\.js$/,
    use: `babel-loader`,
    exclude: /node_modules/
})

//css转换
loaders.push({
    test: /\.(sa|sc|c|le)ss$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {hmr: __DEV__, reloadAll: __DEV__}
        },
        ...[`css-loader`, `postcss-loader`, `sass-loader`]
    ]
})

//解析图片
loaders.push({
    test: /\.(jpe?g|png|gif)$/,
    use: [{
        loader: `url-loader`,
        options: {
            limit: 8192, //8kb
            outputPath: `images/`
        }
    }]
})

//解析字体
loaders.push({
    test: /\.(eot|ttf|woff|svg)$/,
    use: [{
        loader: `url-loader`,
        options: {
            limit: 8192, //8kb
            outputPath: `fonts/`
        }
    }]
})

export default loaders;