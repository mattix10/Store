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
ProductSchema.index({name: 'text'});
module.exports = mongoose.model('Product', ProductSchema)