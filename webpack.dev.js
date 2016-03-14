const NpmInstallPlugin = require('npm-install-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common')
const PATHS = require('./webpack.paths')

module.exports = Object.assign(common, {
  devServer: {
    contentBase: PATHS.build,
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
    })
  ]
})