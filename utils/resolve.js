import Path from 'path';
import process from 'process';

export default (path) => (
    Path.resolve(process.cwd(), path)
)