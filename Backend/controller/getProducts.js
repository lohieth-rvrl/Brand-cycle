const productModel = require('../models/productModel')

// get all products
exports.getProducts = async(req, res, next) => {

    const products = await productModel.find({});

    res.json(
        {
            success: true,
            products
        }
    )
}

// get single product
exports.getProductsid = async( req,res,next) => {
    try{
        var productid = await productModel.findById(req.params.id)
    }catch(error){
        res.status(403).json({
            success: false,
            message: "product unavailable"
        })
    }
    

    res.json({
        success: true,
        message: productid
    })
}