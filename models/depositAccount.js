// app/models/api.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DepositAccountSchema   = new Schema({
    name: String,
    number: String,
    balance: Number
});

module.exports = mongoose.model('DepositAccount', DepositAccountSchema);
