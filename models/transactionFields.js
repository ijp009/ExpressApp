const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionFieldsSchema = new Schema({
    atm_id: {type: String, required: true},
    card_id: {type: String, required: true},
    dispensed_amount: {type: Number, required: true},
    dispensed_cash: {type: Array, required: true},
});
module.exports = mongoose.model('transactionfields', TransactionFieldsSchema);

