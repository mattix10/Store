const express = require('express');
const orderController = require('../controllers/order.controller');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router
  .route('/')
  .get(authController.verificationJWT, orderController.getOrders)
  .post(orderController.addOrder)
router
  .route('/:id')
  .put(authController.verificationJWT, orderController.updateOrder)
  .delete(authController.verificationJWT, orderController.deleteOrder)

module.exports = router;