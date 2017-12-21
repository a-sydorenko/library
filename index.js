'use strict'

const browsers = require('./browsers.json')
const countries = require('./countries.json')
const oss = require('./os.json')

module.exports = {
  getBrowser: (a) => browsers[a] ? browsers[a].id : 0,
  getCountry: (a) => countries[a] ? countries[a] : 0,
  getOs: (a) => oss[a] ? oss[a].id : 0
}
