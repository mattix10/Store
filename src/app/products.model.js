const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  price: Number,
  image: Array,
  size: String,
})

module.exports = mongoose.model('Product', ProductSchema)