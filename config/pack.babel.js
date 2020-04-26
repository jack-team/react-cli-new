import os from 'os';
import HappyPack from 'happypack';

const threadPool = (
    HappyPack.ThreadPool({
        size: os.cpus().length
    })
)

const _loader_ = {
    loader: `babel-loader`,
    options: { cacheDirectory: true }
}

const _options_ = {
    verbose: true,
    id: `happyBabel`,
    loaders: [_loader_],
    threadPool: threadPool
}

export default () => (
    new HappyPack(_options_)
)