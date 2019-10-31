const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const templateRoutes = require("./src/routes/template");
const apiRoutes = require("./src/routes/api");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// view engine setup
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/src/templates/layouts/"
  })
);

app.set("views", path.join(__dirname, "/src/templates"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "")));

app.use("/", templateRoutes);

app.use("/api", apiRoutes);

// webpack setup start
const webpack = require("webpack");
const config = require("./webpack.config");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

app.use(webpackDevMiddleware);

//handel favicon request
app.use(function(req, res, next) {
  if (req.originalUrl == "/favicon.ico") {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Server listen on port
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server running at port " + port);
