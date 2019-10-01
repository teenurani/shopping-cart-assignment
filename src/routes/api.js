var express = require("express");
var router = express.Router();
const banners = require("../data/banners/index.get.json");
const products = require("../data/products/index.get.json");
const categories = require("../data/categories/index.get.json");
const helper = require("../js/helper");

router.get("/getBanners", function(req, res) {
  res.json(banners);
});

router.get("/getProductList", function(req, res) {
  res.json(products);
});

module.exports = router;
