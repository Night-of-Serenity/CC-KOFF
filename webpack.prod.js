// Import: Other module
const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Import: Our module
const commonConfig = require("./webpack.config");

// ###################################
const proconfig = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[hash].min.js", // .min == minify remove all code comments and white space
    assetModuleFilename: "images/[hash][ext][query]",
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.S?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          //   "style-loader", // append <link > in html
          "css-loader", // allow import '.index.css'
          "sass-loader",
        ],
      },
    ],
  },
  // Plugins
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./src/template/index.html",
    // }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template/index.html",
        // filename: "index.min.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
});
module.exports = proconfig;
