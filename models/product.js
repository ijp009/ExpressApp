const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let ProductSchema = new Schema({
//     name: {type: String, required: true, max: 100},
//     price: {type: Number, required: true},
// });

let userSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true},
})
module.exports = mongoose.model('Users', userSchema);
