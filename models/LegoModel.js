var mongoose = require('mongoose');
var LegoSchema = mongoose.Schema({
    name: String,
    brand: String,
    quantity: Number,
    price: Number,
    image: String,
    description: String
});
const LegoModel = mongoose.model("Lego", LegoSchema, "Lego");
module.exports = LegoModel;