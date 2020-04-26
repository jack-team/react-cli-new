import webpack from 'webpack';
import webpackConfig from './base';
import buildLog from './../utils/buildLog';
import pointError from './../utils/pointError';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

webpackConfig.plugins.push(
    new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap:false
    })
)

webpackConfig.plugins.push(
    new OptimizeCSSAssetsPlugin({})
)

webpackConfig.plugins.push(
    new webpack.ProgressPlugin({
        profile: true
    })
)

webpackConfig.plugins.push(pointError);

webpackConfig.plugins.push(
    new webpack.HashedModuleIdsPlugin()
)

webpack(webpackConfig,buildLog);

