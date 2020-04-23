import webpack from 'webpack';
import * as utils from './utils';
import webpackConfig from './base';
import TerserPlugin from 'terser-webpack-plugin';

webpackConfig.plugins.push(
    new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap:false
    })
)

webpackConfig.plugins.push(
    new webpack.ProgressPlugin({
        profile: true
    })
)

webpackConfig.plugins.push(
    utils.pointErrorLogPlugin
)

webpackConfig.plugins.push(
    new webpack.HashedModuleIdsPlugin()
)

webpack(webpackConfig,utils.outputLogPlugin);

