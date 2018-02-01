'use strict'

const uaParser = require('ua-parser-js')
const { expect } = require('chai')
const { checkUniqueId, os } = require('./data')
const OSLib = require('../os.json')

describe('os tests', () => {

  describe('user agents tests', () => {
    for (let name in os) {
      const currentOs = os[name]
      currentOs.forEach((agent) => {

        const parsed = uaParser(agent)
        if (parsed && parsed.os.name) {

          it(`os name (${name}) should match returned name (${parsed.os.name})`, () => {
            expect(parsed.os.name.toLowerCase()).to.equal(name)
          })
        }

        else {
          it(`os name was not defined (${name})`, () => {
            expect(false).to.equal(true)
          })
        }
      })
    }
  })

  describe('relations tests', () => {

    for (let name in os) {

      it(`must have the same name (${name}) into library`, () => {
        expect(OSLib[name]).to.be.an('object')
      })
    }
  })

  describe('no repeat id', () => {
    for (let name in OSLib) {

      it(`browser (${name}) has unique id`, () => {
        expect(checkUniqueId(OSLib, name)).to.equal(true)
      })
    }
  })
})
