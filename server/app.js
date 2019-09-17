// call the packages we need
var express = require("express"); // call express
var app = express(); // define our app using express
var bodyParser = require("body-parser");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

var categories = require("./categories/index.get.json");
var banners = require("./banners/index.get.json");

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// home page banners data
router.get("/banners", function(req, res) {
  res.json(banners);
});

// home page category data
router.get("/categories", function(req, res) {
  var data = categories
    .filter((item, index) => item.enabled == true)
    .sort((a, b) => (a.order < b.order ? 0 : 1));
  res.json(data);
});

// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
app.listen(port);
console.log("Server running at port " + port);
