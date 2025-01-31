const express = require('express');
const { getProducts, getProductsid } = require('../controller/getProducts');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getProductsid);
module.exports = router;
// export default router;