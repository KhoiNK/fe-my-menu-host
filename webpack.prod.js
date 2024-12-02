const webpack = require('webpack'); 
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...common.plugins.map(plugin => plugin),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    })
  ]
});