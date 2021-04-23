const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.verificationJWT = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauhtorized request");
  }
  const payload = jwt.verify(token, "secret");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  next();
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (error, user) => {
    if (error) {
      console.error(error.name, error.message);
    } else {
      if (!user) {
        res.status(401).send("Invalid email or password");
      } else {
        const payload = { subject: user._id };
        const token = jwt.sign(payload, "secret");
        res.status(200).send({ token });
      }
    }
  });
};
