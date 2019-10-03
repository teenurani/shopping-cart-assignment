var express = require("express");
var router = express.Router();
const banners = require("../data/banners/index.get.json");
const products = require("../data/products/index.get.json");
const categories = require("../data/categories/index.get.json");
const helper = require("../js/utils");

router.all("/", function(req, res, next) {
  const categoriesData = helper.categoriesData(categories);
  const dotArray = [...Array(banners.length).keys()];
  res.render("home", { banners, categoriesData, dotArray });
});

router.get("/product", function(req, res, next) {
  const categoriesData = helper.categoriesData(categories);
  res.render("product", { categoriesData });
});

router.get("/registration", function(req, res, next) {
  res.render("registration");
});

router.get("/login", function(req, res, next) {
  res.render("login");
});

module.exports = router;
