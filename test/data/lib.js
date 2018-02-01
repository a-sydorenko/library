'use strict'

module.exports = {
  checkUniqueId
}

/**
 * @function checkUniqueId
 * @description checks passed property into object has unique id
 * @param {object} obj - target object
 * @param {string} targetName - target property
 * @returns {boolean|string}
 * */

function checkUniqueId (obj, targetName) {
  let noMatches = true
  const currentId = obj[targetName].id

  for (let name in obj) {
    if (name !== targetName && obj[name].id === currentId) {
      noMatches = name
      break
    }
  }

  return noMatches
}
