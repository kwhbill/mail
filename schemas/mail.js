var mongoose = require('mongoose');

//内容的表结构
module.exports = new mongoose.Schema({
    name: String,
    address: String,
    message: String,
    read: {
        type: Boolean,
        default: false
    },
});