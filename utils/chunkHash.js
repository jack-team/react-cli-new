export default (dev,type,length) => {
    return dev ? `` :`-[${type}hash:${length || 8}]`;
}