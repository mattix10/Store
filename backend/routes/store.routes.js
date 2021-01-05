const express = require('express');
const authController = require('../controllers/auth.controller');
const productController = require('../controllers/product.controller');
const router = express.Router();

router
  .route('/store')
  .get(productController.searchProducts)

router
  .route('/auth')
  .post(authController.login);

module.exports = router;