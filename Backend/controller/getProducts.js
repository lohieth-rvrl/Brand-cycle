exports.getProducts = (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'good'
        }
    )
}
exports.getProductsid = ( req,res,next) => {
    res.json({
        success: true,
        message: 'product id'
    })
}