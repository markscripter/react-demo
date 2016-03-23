const webpack = require('webpack')

module.exports = {
  entry: {
    app: './app',
    vendor: ['baconjs', 'ramda', 'react', 'dispatcher']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './public/js/',
    filename: '[name].bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: __dirname + './app'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: __dirname + '/app'
      }
    ]
  }
}
