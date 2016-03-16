const webpack = require('webpack')
const PATHS = require('./webpack.paths')

module.exports = {
  entry: {
    app: PATHS.app,
    // worker: PATHS.app + '/worker.js',
    vendor: ['baconjs', 'ramda', 'react', 'dispatcher']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.javascript,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      }
    ]
  }
}
