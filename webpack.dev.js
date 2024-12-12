const webpack = require('webpack'); 
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env.staging") });
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    compress: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: [path.resolve(__dirname, "..")],
    client: {
      overlay: {
        errors: false,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
  plugins: [
    ...common.plugins.map((plugin) => plugin),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
});
