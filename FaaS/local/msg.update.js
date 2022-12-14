module.exports = async function main(data) {

    var records = await localforage.getItem('msg.group.' + group_id);
    records.forEach((val) => {
        if (val.cursor === data.location) {
            for (var key in data) {
                if (key == 'location') continue;
                if (key == 'group_id') continue;
                val[key] = data[key];
            };
        };
    });
    await localforage.setItem('msg.group.' + group_id, records);

};