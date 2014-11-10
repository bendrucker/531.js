'use strict';

var round   = require('round');
var extend  = require('xtend');
var program = require('./program.json');

module.exports = function (max, options) {
  options = extend({}, {
    round: 'down',
    increment: 5,
    use90: true
  }, options);
  if (options.use90) max = max * 0.9;
  function set (spec) {
    return extend(spec, {
      weight: round(spec.ratio * max, options.increment, {
        direction: options.round
      })
    });
  }
  return program.weeks.map(function (week, index) {
    return {
      name: 'Week ' + (index + 1),
      sets: week.sets.map(set)
    };
  });
};

