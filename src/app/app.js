const express = require('express');
const app = express();
const { mongoose } = require('./mongoose')
const bodyParser = require('body-parser');
var Product = require('./products.model');
const config = require ('./dbconfig');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())
app.get('/products', (req, res) => {
  Product.find({}, (err, data) => {
    res.send(data)
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

  Product.findOneAndRemove({
    _id: req.params.id
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
app.listen(3000, () => {
  console.log('server is listening at port 3000')
})