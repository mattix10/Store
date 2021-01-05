const Order = require('../models/orders.model');

exports.getOrders = async (req, res, next) => {
  Order.find({}, (err, data) => {
      res.statusText = 'OK';
      res.status(200).send(data);
    })
}

exports.getOrder = async (req, res, next) => {
  let query = Order.findById(req.params.id);   
}

exports.updateOrder = async (req, res, next) => {
  const doc = await Order.findByIdAndUpdate(req.params.id, req.body);

  res.statusText = 'OK';
  res.status(200).send(doc);
}

exports.deleteOrder = async (req, res, next) => {
  const doc = await Order.findByIdAndDelete(req.params.id);

  res.statusText = 'OK';
  res.status(204).send(null);
}

exports.addOrder = async (req, res, next) => {
  const doc = await Order.create(req.body);
  
  res.statusText = 'OK';
  res.status(204).send(doc);
}