'use strict'

var test = require('tape')
var fto = require('./')

test(function (t) {
  var cycle = fto(400)
  t.equal(cycle.length, 4)
  t.equal(cycle[0][0].weight, 230)

  t.equal(fto(400, {round: 'up'})[0][0].weight, 235)
  t.equal(fto(400, {increment: 10})[0][0].weight, 230)
  t.equal(fto(400, {use90: false})[0][0].weight, 260)

  t.end()
})
