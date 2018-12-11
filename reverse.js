'use strict'

const Fs = require('fs')
const browsers = require('./browsers.json')
const countries = require('./countries.json')
const languages = require('./languages.json')
const os = require('./os.json')

const reverse = {
  browsers: {},
  countries: {},
  languages: {},
  os: {}
}

fillBO(browsers, reverse, 'browsers')
fillBO(os, reverse, 'os')
fillBO(languages, reverse, 'languages')

fillC(countries, reverse)

Fs.writeFileSync('reverse.json', JSON.stringify(reverse))

function fillBO (lib, map, prop) {
  const current = map[prop]
  for (let key in lib) {
    current[lib[key].id] = key
  }
}

function fillC (lib, map) {
  const current = map.countries
  for (let key in lib) {
    current[lib[key]] = key
  }
}
