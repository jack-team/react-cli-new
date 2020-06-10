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

export default (module = true) => (
    new HappyPack({
        verbose: true,
        threadPool: _threadPool_,
        id: `happySass${module ? `Module` : ``}`,
        loaders: [module ? _cssLoader_ : `css-loader`, `postcss-loader`, `sass-loader`]
    })
)