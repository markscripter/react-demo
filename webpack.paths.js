const path = require('path')

module.exports = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public'),
  javascript: path.join(__dirname, 'public/js'),
  root: __dirname
}
