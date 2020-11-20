const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./products.model').schema;
const CartSchema = new Schema({
  itemCount: Number,
  cartPrice: Number,
  queues:[
    {
      product: Product,
      quantity: Number
    }
  ]
})
module.exports = mongoose.model('Cart', CartSchema)