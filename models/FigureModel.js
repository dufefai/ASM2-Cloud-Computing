var mongoose = require('mongoose');
var FigureSchema = mongoose.Schema({
    name: String,
    brand: String,
    quantity: Number,
    price: Number,
    image: String,
    description: String
});
const FigureModel = mongoose.model("Figure", FigureSchema, "Figure");
module.exports = FigureModel;