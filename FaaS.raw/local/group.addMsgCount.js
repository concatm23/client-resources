module.exports = async function main(data = {}) {
    var data = await sdk.fs.read('group-list');
    data = data || [];
    data.forEach((val) => {
        if (val.group_id === data.group_id && val.user_uid === data.uid) val.msg_counts += data.counts;
    });
    await sdk.fs.write('group-list', null, data);
};