const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cart = require('./cart.model').schema;
const OrderSchema = new Schema({
  id: Number ,
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  shipped: Boolean,
  cart: Cart
})
module.exports = mongoose.model('Order', OrderSchema)