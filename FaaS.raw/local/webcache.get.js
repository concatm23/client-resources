

module.exports = async function (data) {
    var res = await sdk.fs.read('cache.' + data.key);
    if (!res) return '';
    if (res.expires_at < new Date().getTime()) {
        sdk.fs.unlink('cache.' + data.key);
        return '';
    };
    return res.cache_value;
};