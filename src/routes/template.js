var express = require("express");
var router = express.Router();
var en = require("../i18/en.json");

router.all("/", function(req, res, next) {
  res.render("home", { header: en.header, footer: en.footer, home: en.home });
});

router.get("/product", function(req, res, next) {
  res.render("product", { header: en.header, footer: en.footer });
});

router.get("/registration", function(req, res, next) {
  res.render("registration", {
    header: en.header,
    footer: en.footer,
    register: en.register
  });
});

router.get("/login", function(req, res, next) {
  res.render("login", {
    header: en.header,
    footer: en.footer,
    login: en.login
  });
});

module.exports = router;
