import os from 'os';
import HappyPack from 'happypack';
import resolve from '../utils/resolve';

const _threadPool_ = (
    HappyPack.ThreadPool({
        size: os.cpus().length
    })
)

const _cssModules_ = {
    mode: `local`,
    exportGlobals: true,
    context: resolve(`src`),
    localIdentName: `[local]--[hash:base64:8]`
}

const _cssLoader_ = {
    loader: `css-loader`,
    options: {
        modules: _cssModules_
    }
}

const _options_ = {
    verbose: true,
    id: `happySass`,
    threadPool: _threadPool_,
    loaders: [_cssLoader_, `postcss-loader`, `sass-loader`]
}

export default () => (
    new HappyPack(_options_)
)