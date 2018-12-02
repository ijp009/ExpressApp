const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ATMFieldsSchema = new Schema({
    currency_denomination: {type: Number, required: true, enum: [50, 100, 500, 1000, 2000]},
    count: {type: Number, required: true},
    atm_id: {type: Number, required: true}
});
module.exports = mongoose.model('atmfields', ATMFieldsSchema);
