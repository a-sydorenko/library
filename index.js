'use strict'

const browsers = require('./browsers.json')
const { iso3ToInt, iso2ToIso3 } = require('./countries.json')
const languages = require('./languages.json')
const oss = require('./os.json')

module.exports = {
  getBrowser: (a) => browsers[a] ? browsers[a].id : 0,
  getCountry: (a) => iso3ToInt[a] ? iso3ToInt[a] : 0,
  getCountryIso3: (a) => iso2ToIso3[a] ? iso2ToIso3[a] : '',
  getLang: (a) => languages[a] ? languages[a].id : 0,
  getOs: (a) => oss[a] ? oss[a].id : 0
}
