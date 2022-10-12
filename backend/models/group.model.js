const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    //body part
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    //array of exercisesg
    group: {
        type: Array,
        required: true
    }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;