import Path from 'path';
import process from 'process';

//绝对路径
export const resolve = path => (
    Path.resolve(process.cwd(), path)
)

//字节单位转换
export const bytesToSize = bytes => {
    if (!bytes) return `0 B`;
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const sizes = [`B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`];
    return (bytes / Math.pow(k, i)).toPrecision(3) + ` ` + sizes[i];
}

//打包输出错误信息
export const pointErrorLogPlugin = function () {
    this.plugin(`done`, stats => {
        const {
            argv
        } = process;

        const {
            compilation
        } = stats;

        const {
            errors = []
        } = compilation;

        const {
            length
        } = errors;

        const _ended_ = (
            argv.indexOf(`--watch`) === -1
        )

        if (_ended_ && length > 0) {
            errors.forEach(error => {
                console.log(error.message)
            })
            return process.exit(1);
        }
    })
}


//打包输出打印
export const outputLogPlugin = (error, stats) => {
    if (!!error) {
        const {
            stack,
            details
        } = error || {};
        const msg = !!details ? details : (stack || error);
        return console.log(msg);
    }
    const {
        assets
    } = stats.toJson();
    const output = {};
    assets.forEach(({name, size}) => (
        output[name] = {
            size: bytesToSize(size)
        }
    ))
    console.table(output);
    console.log(`build successful!\n`);
}

//hash
export const chunkHash = (dev,type,length) => {
    return dev ? `` :`-[${type}hash:${length || 8}]`;
}