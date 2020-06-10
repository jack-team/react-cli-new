const _runtimeChunk_ = {
    name: `runtime`
}

const _cacheGroups_ = {
    commons: {
        test: /src/,
        minChunks: 2,
        chunks: `all`,
        maxInitialRequests:5
    },
    libs: {
        name: `libs`,
        chunks: `initial`,
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
    chunkIds:`named`,
    splitChunks: _splitChunks_,
    runtimeChunk:_runtimeChunk_
}