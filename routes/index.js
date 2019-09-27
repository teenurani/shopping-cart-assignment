var express = require("express");
var router = express.Router();
const banners = require("../server/banners/index.get.json");
const products = require("../server/products/index.get.json");
const categories = require("../server/categories/index.get.json");
const helper = require("./helper");

router.get("/", function(req, res, next) {
  const categoriesData = helper.categoriesData(categories);
  const dotArray = [...Array(banners.length).keys()];
  res.render("home", { banners, categoriesData, dotArray });
});

router.get("/product", function(req, res, next) {
  const categoriesData = helper.categoriesData(categories);
  res.render("product", { categoriesData });
});

// API start
router.get("/api/getBanners", function(req, res) {
  res.json(banners);
});

router.get("/api/getProductList", function(req, res) {
  res.json(products);
});

module.exports = router;
