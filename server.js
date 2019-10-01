const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const templateRoutes = require("./src/routes/template");
const apiRoutes = require("./src/routes/api");

const app = express();

// view engine setup
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/src/views/layouts/"
  })
);
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

const staticMiddleware = express.static("dist");
app.use(staticMiddleware);
// webpack setup end

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
