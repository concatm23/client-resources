
module.exports = async function (data) {
    await sdk.fs.unlink('cache.' + data.key);
};