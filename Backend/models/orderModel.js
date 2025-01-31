const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartitems : Array,
    amount: String,
    status: String
})

const orderModel = mongoose.model('Order', orderSchema)

module.exports = orderModel;