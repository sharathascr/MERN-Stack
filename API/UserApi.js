const exp = require("express");
const userApi = exp.Router();
const user = require("../models/userModel");
const errorHandler = require("express-async-handler");
const bcryptjs = require("bcrypt");
//body parser
userApi.use(exp.json());

//get products according to user
userApi.get(
  "/get-product/:client",
  errorHandler(async (req, resp) => {
    let User = await user.findOne({ user: req.params.client });
    let productArr = User.product;
    productArr = [...productArr].sort((a, b) =>
      a.productName.toLowerCase() < b.productName.toLowerCase() ? -1 : 1
    );

    resp.send(productArr);
  })
);


//login user
userApi.put(
  "/login",
  errorHandler(async (req, resp) => {
    let presentUser = await user.findOne({ user: req.body.user });
    if (presentUser === null) {
      resp.send("invalid user");
    } else {
      let result = await bcryptjs.compare(
        req.body.password,
        presentUser.password
      );
      if (result) {
        resp.send({
          msg: "login success",
        });
      } else resp.send("invalid password");
    }
  })
);

//create user
userApi.post(
  "/create-user",
  errorHandler(async (req, resp) => {
    let existUser = await user.findOne({ user: req.body.user });

    if (existUser === null) {
      password = req.body.password;
      hashPassword = await bcryptjs.hash(password, 3);
      req.body.password = hashPassword;
      let userObj = new user(req.body);
      await userObj.save();
      resp.send("user created");
    } else {
      resp.send("user already exist");
    }
  })
);


//update product
userApi.put(
  "/update-product",
  errorHandler(async (req, resp) => {
    data = req.body;
    let categoryArr = [];
    let categoryPresent = true;
    let dataArr = await user.findOne({ user: data.user });
    let product = dataArr.product;
    for (let element of product) {
      if (
        element.productName.toLowerCase() ===
        data.productObj.productName.toLowerCase()
      )
        categoryArr.push(element);
    }

    for (element of categoryArr) {
      if (element.productId === data.productObj.productId) {
        categoryPresent = false;
      }
    }

    if (categoryPresent === true) {
      product.push(data.productObj);
      await user.updateOne({ user: data.user }, { product: product });
      resp.send("product list updated");
    } else resp.send("product already exist");
  })
);

module.exports = userApi;
