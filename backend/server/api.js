const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const User = require('./user');
var Order = require('./orders.model');
const bodyParser = require('body-parser');
const { nextTick } = require('process');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,  Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('From API route')
})

router.get('/orders/:id', (req, res) => {
 Order.findOne({
     _id: req.params.id
 }, {runSettersOnQuery: true}).then((o) => {
     console.log(o)
 })
})

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else 
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secret')
                res.status(200).send({token})
            }
        }
    })
})

router.patch('/orders/:id', (req, res) => {
    console.log(req.body);
    Order.findOneAndUpdate({ _id: req.params.id}, {
      $set: req.body
    }).then(() => {
      res.sendStatus(200);
    });
    
})


router.get('/orders', verificationToken, (req, res) => {
    Order.find({}, (err, data) => {
      res.send(data)
    })
  })

  router.delete('/orders/:id', (req, res) => {
    let params =  req.params;
        id = req.params
        console.log(req)
            Order.findOneAndRemove({
                _id: params['id']
              }).then((removedOrder) => {
                  res.send(removedOrder)
                console.log(removedOrder)
                console.log(params.id)
              })
    })

module.exports = router;

function verificationToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauhtorized request');
  }
  let payload = jwt.verify(token, 'secret');
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }

  next()
}