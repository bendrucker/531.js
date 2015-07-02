'use strict'

var round = require('round')
var extend = require('xtend')
var ap = require('ap')
var weeks = require('./program.json')

var applyDefaults = ap.partial(extend, {
  round: 'down',
  increment: 5,
  use90: true
})

module.exports = function (max, options) {
  options = applyDefaults(options)
  if (options.use90) max = max * 0.9

  var roundWeight = ap.partialRight(round, options.increment, options.round)

  return weeks.map(function (sets) {
    return sets.map(function (set) {
      return extend(set, {
        weight: roundWeight(set.ratio * max)
      })
    })
  })
}
