const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    treeshakable: "./src/treeshakable.js",
    notTreeshakable: "./src/notTreeshakable.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    //minimize: true,
  },
};

module.exports = config;
