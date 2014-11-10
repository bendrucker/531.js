'use strict';

var round   = require('round');
var extend  = require('xtend');
var program = require('./program.json');

module.exports = function (max, options) {
  max = max * 0.9;
  options = options || {};
  function set (spec) {
    return extend(spec, {
      weight: round(spec.ratio * max, 5, {
        direction: typeof options.round === 'undefined' ? 'down' : options.round
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

