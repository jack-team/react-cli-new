const _runtimeChunk_ = {
    name: `runtime`
}

const _cacheGroups_ = {
    commons: {
        test: /src/,
        minChunks: 2,
        name: `commons`
    },
    libs: {
        name: `libs`,
        test: /node_modules/
    },
    styles: {
        chunks: 'all',
        minChunks: 2,
        enforce: true,
        name: 'styles',
        test: /\.(scss|css)$/,
        reuseExistingChunk: true
    }
}

const _splitChunks_ = {
    chunks: `all`,
    cacheGroups: _cacheGroups_
}

export default {
    splitChunks: _splitChunks_,
    runtimeChunk:_runtimeChunk_
}