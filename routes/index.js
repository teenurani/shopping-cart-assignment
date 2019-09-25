var express = require("express");
var router = express.Router();
const banners = require("../server/banners/index.get.json");
const products = require("../server/products/index.get.json");
const categories = require("../server/categories/index.get.json");
const helper = require("./helper");

/* GET home page. */
router.get("/", function(req, res, next) {
  const categoriesData = helper.categoriesData(categories);
  const dotArray = [...Array(banners.length).keys()];
  res.render("home", { banners, categoriesData, dotArray });
});

router.get("/product", function(req, res, next) {
  const categoriesData = helper.categoriesData(categories);
  res.render("product", { categoriesData, products });
});

module.exports = router;
