const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sportInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    muscleFocus: {
        type: Array,
        required: true
    }
});

const SportInfo = mongoose.model('SportInfo', sportInfoSchema);

module.exports = SportInfo;