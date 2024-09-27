const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./src/main.js"],
  mode: process.env.mode,
  output: {
    filename: "main-bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    hot: true,
    color: true,
    contentBase: "dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[.ext]"
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        exclude: /fonts/ /* don't want svg fonts from fonts folder to be included */,
        use: [
          {
            loader: "svg-url-loader"            
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()]
};
