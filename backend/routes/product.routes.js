const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

router
  .route('/')
  .get(productController.getProducts)

router
  .route('/:id')
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)

module.exports = router;