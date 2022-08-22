
module.exports = async function main(data) {
    return JSON.stringify((await sdk.fs.read('group-list')).filter((val) => val.user_uid === data.uid && val.group_id === data.group_id));
};