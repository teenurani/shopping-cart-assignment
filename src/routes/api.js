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

router.get("/getCartList", function(req, res) {
  const cartData = cartList();
  res.json(cartData);
});

router.get("/cartItems", function(req, res) {
  res.json(cart.length);
});
router.post("/addToCart", function(req, res) {
  cart.push(req.body.productId);
  addToCart.cart = cart.length;
  const cartData = cartList();
  addToCart.data = cartData;
  res.json(addToCart);
});

router.post("/removeFromCart", function(req, res) {
  const index = cart.indexOf(req.body.productId);
  if (index !== -1) cart.splice(index, 1);
  addToCart.cart = cart.length;
  const cartData = cartList();
  addToCart.data = cartData;
  res.json(addToCart);
});

const cartList = () => {
  var cartData = {};
  cart.forEach(function(i) {
    cartData[i] = (cartData[i] || 0) + 1;
  });

  const cartListData = { data: [] };

  products.forEach(function(product) {
    if (cartData[product.id]) {
      let data = {
        imageURL: product.imageURL,
        name: product.name,
        price: product.price,
        quantity: cartData[product.id],
        id: product.id
      };
      cartListData.data.push(data);
    }
  });
  return cartListData;
};

module.exports = router;
