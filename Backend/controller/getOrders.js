const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

exports.getOrders = async(req, res, next) => {

    //   - to get decimal
    // console.log(req.body, "data")
    // console.log(amount, "AMOUNT");

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0).toFixed(2));
    const status = "pending";

    const order = await orderModel.create({cartItems,amount, status})

    // after upadte the product stock
    cartItems.forEach(async(item) => {
        const productstock = await productModel.findById(item.product._id);
        productstock.stock = productstock.stock - item.qty;
        await productstock.save();
    })
 

    res.json
    ({
        success: true,
        order
    })
}