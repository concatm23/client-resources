
module.exports = async function main(data) {
    var data = await sdk.fs.read('group.' + data.group_id);
    data.push({
        cType: data.cType || 0,
        content: data.content,
        username: data.username,
        uid: data.uid,
        status: data.status,
        cursor: data.cursor,
        timestamp: data.ts || new Date().getTime(),
        ip: data.ip,
        is_received: data.is_received || 0
    });
    await sdk.fs.write('group.' + data.group_id, null, data);

    return {};
}