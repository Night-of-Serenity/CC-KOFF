// Import: Other module
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Import: Our module
const commonConfig = require("./webpack.config");

// ###################################
const devConfig = merge(commonConfig, {
  mode: "development",

  // Loaders
  module: {
    rules: [
      {
        test: /\.S?css$/i,
        use: [
          "style-loader", // append <link > in html
          "css-loader", // allow import '.index.css'
          "sass-loader",
        ],
      },
    ],
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
});
module.exports = devConfig;
