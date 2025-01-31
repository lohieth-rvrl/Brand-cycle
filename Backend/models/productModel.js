const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    prize: String,
    stock: String,
    // ratings: String,
    // image: [{
    //     image:String,
    // }]
})


const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;