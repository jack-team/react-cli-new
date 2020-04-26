const cache = (
    require('./utils/cache')
)

const args = cache.args = (
    require('minimist')(
        process.argv.splice(2)
    )
)

const plugins = [
    `@babel/plugin-transform-runtime`
]

plugins.push(
    [`@babel/plugin-proposal-decorators`, {
        legacy: true
    }]
)

const config = {
    plugins: plugins,
    presets: ['@babel/env']
}

require('@babel/register')(config);

module.exports = require(`${args.input}`);