const express = require('express');
const app = express();
const mongoose  = require('./mongoose')
const bodyParser = require('body-parser');
var Product = require('./products.model');
const config = require ('./dbconfig');
const api = require('./api');
const Order = require('./orders.model')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, PATCHT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/api', api);
app.get('/products', (req, res) => {
  Product.find({}, (err, data) => {
    res.send(data);
  })
})

app.post('/products', (req, res) => {

  let name = req.body.name;
  let newProduct = new Product({
    name
  })
  newProduct.save().then((listDoc) => {
    res.send(listDoc);
  })
})

app.post('/products/:id', (req, res) => {
  let newProduct = new Product({
      name: req.body.name
  })
})

app.delete('/products/:id', (req, res) => {

  let params =  req.params;
  Product.findOneAndRemove({
    _id: params.id
  }).then((removedProductDoc) => {
    res.send(removedProductDoc);
    console.log(removedProductDoc)
  })
})

app.patch('/products/:id', (req, res) => {

  Product.findOneAndUpdate({ _id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
})

app.post('/orders', (req, res) => {

  let newOrder = new Order({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.name,
    country: req.body.coutntry,
    shipped: req.body.shipped,
    cart: req.body.cart
  })
  newOrder.save().then((orders) => {
    res.send(orders);
  })
})

app.listen(3000, () => {
  console.log('server is listening at port 3000')
})