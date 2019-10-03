var express = require("express");
var router = express.Router();

router.all("/", function(req, res, next) {
  // const categoriesData = helper.categoriesData(categories);
  // const dotArray = [...Array(banners.length).keys()];
  res.render("home");
});

router.get("/product", function(req, res, next) {
  res.render("product");
});

router.get("/registration", function(req, res, next) {
  res.render("registration");
});

router.get("/login", function(req, res, next) {
  res.render("login");
});

module.exports = router;
