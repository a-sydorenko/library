'use strict'

const uaParser = require('ua-parser-js')
const { expect } = require('chai')
const { browsers } = require('./data')
const BrowsersLib = require('../browsers.json')

describe('browser tests', () => {

  describe('user agents tests', () => {
    for (let name in browsers) {
      const browser = browsers[name]
      browser.forEach((agent) => {

        const parsed = uaParser(agent)
        if (parsed && parsed.browser.name) {

          it(`browser name (${name}) should match returned name`, () => {
            expect(parsed.browser.name.toLowerCase()).to.equal(name)
          })
        }

        else {
          it(`browser name was not defined (${name})`, () => {
            expect(false).to.equal(true)
          })
        }
      })
    }
  })

  describe('relations tests', () => {

    for (let name in browsers) {

      it(`must have the same name (${name}) into library`, () => {
        expect(BrowsersLib[name]).to.be.an('object')
      })
    }
  })
})
