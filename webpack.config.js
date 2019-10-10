const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/main.js"],
  mode: "development",
  output: {
    filename: "main-bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      color: true
    }
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
        exclude: /fonts/ /* dont want svg fonts from fonts folder to be included */,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              noquotes: true
            }
          }
        ]
      }      
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
