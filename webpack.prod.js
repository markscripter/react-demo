const common = require('./webpack.common')
const PATHS = require('./webpack.paths')

module.exports = Object.assign(common, {
  output: {
    path: PATHS.javascript,
    filename: 'bundle.[hash].js'
  }
})
