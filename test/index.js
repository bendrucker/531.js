'use strict';

var expect = require('chai').expect;
var fto    = require('../');
var cycle  = fto(400);

describe('531 cycle', function () {

  it('has 4 weeks', function () {
    expect(cycle).to.have.length(4);
  });

  it('adds a week name to each week', function () {
    expect(cycle[0]).to.have.property('name', 'Week 1');
  });

  it('rounds weights down by 5', function () {
    expect(cycle[0].sets[0]).to.have.property('weight', 230);
  });

});
