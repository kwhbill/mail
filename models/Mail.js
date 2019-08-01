
var mongoose = require('mongoose');
var mailSchema = require('../schemas/mail');

module.exports = mongoose.model('Mail', mailSchema);