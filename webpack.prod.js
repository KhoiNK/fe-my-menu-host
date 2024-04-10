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
  plugins: common.plugins.map(plugin => plugin).concat(new BundleAnalyzerPlugin())
});