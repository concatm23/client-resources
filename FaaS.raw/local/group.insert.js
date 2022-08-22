

module.exports = async function main(data = {}) {
    var data = await sdk.fs.read('group-list');
    data.push({
        group_id: data.group_id,
        alias: data.alias || '',
        join_time: data.join_time || 0,
        last_read: data.last_read || 0,
        last_msg: data.last_msg || 0,
        is_on_top: data.is_on_top || 0,
        is_show: (data.is_show == undefined) ? 1 : data.is_show,
        user_uid: data.user_uid,
        group_type: data.group_type || 0,
        msg_counts: 0
    });
    await sdk.fs.write('group-list', null, data);
};