const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    proce: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
