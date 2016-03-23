const common = require('./webpack.common')
const PATHS = require('./webpack.paths')

module.exports = Object.assign(common, {
  output: {
    path: './public/js/',
    filename: 'bundle.[hash].js',
    publicPath: '/js/'
  }
})
