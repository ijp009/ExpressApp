const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CardFieldsSchema = new Schema({
    card_number: {type: String, required: true},
    pin: {type: String, required: true},
    balance: {type: Number, required: true},
});
module.exports = mongoose.model('cardfields', CardFieldsSchema);

