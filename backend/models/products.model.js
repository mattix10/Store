const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  size: String,
  price: Number,
  image: Array
})
ProductSchema.index({name: 'text'});
module.exports = mongoose.model('Product', ProductSchema)