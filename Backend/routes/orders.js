const express = require('express');
const router = express.Router();
const { getOrders } = require('../controller/getOrders');

router.route('/orders').post(getOrders);
module.exports = router;