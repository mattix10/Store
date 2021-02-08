const express = require("express");
const mongoose = require("./mongoose");
const bodyParser = require("body-parser");
const dbconfig = require("./dbconfig");
const { db } = require("./dbconfig");
const Product = require("../models/products.model");
const Order = require("../models/orders.model");
const config = require("./dbconfig");
const app = express();
const productRouter = require("../routes/product.routes");
const orderRouter = require("../routes/order.routes");
const storeRouter = require("../routes/store.routes");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, PATCH, POST, GET, DELETE, OPTIONS"
  );
  next();
});
app.use(bodyParser.json());

app.use("/", storeRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
