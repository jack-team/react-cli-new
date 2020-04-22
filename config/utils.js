import Path from 'path';

//绝对路径
export const resolve = path => (
    Path.resolve(process.cwd(), path)
)