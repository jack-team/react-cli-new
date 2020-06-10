import Ip from 'ip';
import webpack from 'webpack';
import cache from '../utils/cache';
import webpackConfig from './base.config';
import devServer from 'webpack-dev-server';

const args = cache.args;

const ip = (
    args.ip || Ip.address()
)

const stats = {
    colors: true,
    cached: true,
    exclude: [/node_modules[\\\/]/]
}

const serverConfig = {
    host: ip,
    hot: true,
    open: true,
    inline: true,
    stats: stats,
    compress: false,
    contentBase: `./`
}

const server = new devServer(
    webpack(webpackConfig), serverConfig
)

server.listen(args.port, ip, () => (
    console.log(`Server listen to ${ip}:${args.port}`)
))