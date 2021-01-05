const Product = require('../models/products.model');


exports.getProducts = async (req, res, next) => {
  Product.find({}, (err, data) => {
    res.statusText = 'OK';
    res.status(200).send(data);
  })
}

exports.updateProduct = async (req, res, next) => {
  console.log(req);
  const doc = await Product.findByIdAndUpdate(req.params.id, req.body);

  res.statusText = 'OK';
  res.status(200).send(doc);
}

exports.deleteProduct = async (req, res, next) => {
  const doc = await Product.findByIdAndDelete(req.params.id);

  res.statusText = 'OK';
  res.status(204).send(null);
}

exports.searchProducts = async (req, res, next) => {
  const productName = req.query.productName;
  const searchText = {$text: { $search: productName}}
  const query = { name: searchText};

  Product.find(searchText, (err, data) => {
    res.status(200).send(data);
  });
}