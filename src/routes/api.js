var express = require("express");
var router = express.Router();
const banners = require("../data/banners/index.get.json");
const products = require("../data/products/index.get.json");
const categories = require("../data/categories/index.get.json");
const addToCart = require("../data/addToCart/index.post.json");
const cart = []; // Store product id

// banners list
router.get("/getBanners", function(req, res) {
  res.json(banners);
});

//product list
router.get("/getProductList", function(req, res) {
  res.json(products);
});

//categories list
router.get("/getCategories", function(req, res) {
  res.json(categories);
});

//cart list
router.get("/getCartList", function(req, res) {
  const cartData = cartList();
  res.json(cartData);
});

//count or no of items in a cart
router.get("/cartItems", function(req, res) {
  res.json(cart.length);
});

/* add an item in cart 
  params - productId
*/
router.post("/addToCart", function(req, res) {
  cart.push(req.body.productId);
  addToCart.itemCount = cart.length;
  const cartData = cartList();
  addToCart.data = cartData;
  res.json(addToCart);
});

/* remove an item from cart 
  params - productId
*/
router.post("/removeFromCart", function(req, res) {
  const index = cart.indexOf(req.body.productId);
  if (index !== -1) cart.splice(index, 1);
  addToCart.cart = cart.length;
  const cartData = cartList();
  addToCart.data = cartData;
  res.json(addToCart);
});

/*On the bases of product id get details
  params - array of product id.
*/
const cartList = () => {
  var cartData = {};
  cart.map(i => (cartData[i] = (cartData[i] || 0) + 1));

  const cartListData = { data: [] };

  products.map(product => {
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
