
var mongoose = require('mongoose');
var WoodSchema = mongoose.Schema({
    name: String,
    brand: String,
    quantity: Number,
    price: Number,
    image: String,
    description: String
});
const WoodModel = mongoose.model("Wood Toy", WoodSchema, "Wood Toy");
module.exports = WoodModel;