'use strict';

var round   = require('round');
var extend  = require('xtend');
var program = require('./program.json');

module.exports = function (max) {
  max = max * 0.9;
  function set (spec) {
    return extend(spec, {
      weight: round.down(spec.ratio * max, 5)
    });
  }
  return program.weeks.map(function (week, index) {
    return {
      name: 'Week ' + (index + 1),
      sets: week.sets.map(set)
    };
  });
};

