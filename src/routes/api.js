var express = require("express");
var router = express.Router();
const banners = require("../data/banners/index.get.json");
const products = require("../data/products/index.get.json");
const categories = require("../data/categories/index.get.json");
const addToCart = require("../data/addToCart/index.post.json");
const cart = [];

router.get("/getBanners", function(req, res) {
  res.json(banners);
});

router.get("/getProductList", function(req, res) {
  res.json(products);
});

router.get("/getCategories", function(req, res) {
  res.json(categories);
});

router.post("/addToCart", function(req, res) {
  console.log("productId", req.body);
  cart.push(req.body.productId);
  addToCart.cart = cart.length;
  res.json(addToCart);
});

router.post("/removeFromCart", function(req, res) {});

router.get("/getCartList", function(req, res) {
  const cartList = { totalPrice: "567", data: [] };
  if (cart.length > 0) {
    let product = {
      imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
      name: "Apple - Washington, Regular, 4 pcs",
      price: "187",
      quantity: "2",
      totalPrice: "666"
    };
    // cartList.data.push(product);
    // for (let i = 0; i < cart.length; i++) {
    //   for (let j = 0; j < product.length; j++) {

    //   }
    // }
    res.json(cartList);
  }
});

module.exports = router;
