
module.exports = async function main(data) {
    var data = await sdk.fs.read('group.' + data.group_id);
    data = data.filter((a) => a.timestamp >= data.timestamp);
    return JSON.stringify(data.sort((a,b) => a.timestamp - b.timestamp));

};