const { resolve } = require('path')

// eslint-disable-next-line require-await
module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['my-module'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'my-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
