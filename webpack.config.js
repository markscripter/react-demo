const path = require('path')
const TARGET = process.env.npm_lifecycle_event
const webpack = require('webpack')

const NpmInstallPlugin = require('npm-install-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  root: __dirname
}

var common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
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
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = Object.assign({}, common, {
    devtool: 'eval-source-maps',
    devServer: {
      contentBase: PATHS.root,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({save: true})
    ]
  })
}

if (TARGET === 'build') {
  module.exports = Object.assign({}, common, {

  })
}
