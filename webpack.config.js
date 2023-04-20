// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //   mode: "production",
  entry: {
    main: "./src/index.js",
    vender: "./src/vender.js",
  },
  //   output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "[name].[hash].js",
  //     assetModuleFilename: "images/[hash][ext][query]",
  //   },
  // Loaders
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
