import os from 'os';
import HappyPack from 'happypack';

const _threadPool_ = (
    HappyPack.ThreadPool({
        size: os.cpus().length
    })
)

const _options_ = {
    verbose: true,
    id: `happyImg`,
    threadPool: _threadPool_,
    loaders: [{
        loader: `url-loader`,
        options: {
            limit: 8192, //8kb
            outputPath: `images/`
        }
    }]
}

export default () => (
    new HappyPack(_options_)
)