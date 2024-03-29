const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const xss = require("xss-clean");
const path = require("path");
const mongoose = require("./server");
const productRouter = require("../routes/product.routes");
const orderRouter = require("../routes/order.routes");
const storeRouter = require("../routes/store.routes");

const app = express();
app.use(express.static(__dirname + "/dist/project-store"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/myapp/index.html"));
});
app.use(helmet());
app.use(xss());
app.use(express.json());
dotenv.config({ path: "./config.env" });

app.use(cors());

app.options("/api", cors());

app.use("/", storeRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
