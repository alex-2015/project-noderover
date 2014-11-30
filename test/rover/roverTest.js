var expect = require('chai').expect;
var rover = require('../../rover/rover.js');

describe('Rover', function() {

  describe('Setup', function() {

    it('Has a board', function() {
      expect(rover.board).to.equal(true);
    });

  });

});
