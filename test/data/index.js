'use strict'

const browsers = require('./browsers.json')
const os = require('./os.json')
const { checkUniqueId } = require('./lib')

module.exports = {
  checkUniqueId,

  browsers,
  os
}
