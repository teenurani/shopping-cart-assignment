// call the packages we need
var express = require("express"); // call express
var server = express(); // define our server using express
var bodyParser = require("body-parser");

// configure server to use bodyParser()
// this will let us get the data from a POST
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const webpack = require("webpack");
const config = require("../config/webpack.dev");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

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
server.use("/api", router);

// START THE SERVER
server.listen(port);
console.log("Server running at port " + port);
