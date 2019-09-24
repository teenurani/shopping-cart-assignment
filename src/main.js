require("webpack-hot-middleware/client");
require("./main.scss");
require("./js/index");
var banners;

fetch("/api/banners")
  .then(resp => resp.json())
  .then(function(data) {
    banners = data;
  })
  .catch(function(error) {
    console.log(error);
  });
