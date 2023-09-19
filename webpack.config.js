const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    application: "./app/javascript/packs/application.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app/assets/javascripts"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
