var express = require("express");
var router = express.Router();
var en = require("../i18/en.json");

router.all("/", function(req, res, next) {
  res.render("home", { header: en.HEADER, footer: en.FOOTER, home: en.HOME });
});

router.get("/product", function(req, res, next) {
  res.render("product", { header: en.HEADER, footer: en.FOOTER });
});

router.get("/registration", function(req, res, next) {
  res.render("registration", {
    header: en.HEADER,
    footer: en.FOOTER,
    register: en.REGISTER
  });
});

router.get("/login", function(req, res, next) {
  res.render("login", {
    header: en.HEADER,
    footer: en.FOOTER,
    login: en.LOGIN
  });
});

module.exports = router;
