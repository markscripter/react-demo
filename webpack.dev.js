const NpmInstallPlugin = require('npm-install-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = Object.assign(common, {
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin({
      save: true // --save
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    }),
    new ExtractTextPlugin("[name].css"),
  ]
})
