
module.exports = async function main(data) {

    var data = await sdk.fs.read('group.' + group_id);
    data.forEach((val) => {
        if (val.cursor === data.location) {
            for (var key in data) {
                if (key == 'location') continue;
                if (key == 'group_id') continue;
                val[key] = data[key];
            };
        };
    });
    await sdk.fs.write('group.' + group_id, null, data);

};