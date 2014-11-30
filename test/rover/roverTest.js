var expect = require('chai').expect;
var Rover = require('../../rover/rover.js');

describe('Rover', function() {

  describe('Setup', function() {

    it('Has a board', function() {
      var rover = new Rover;
      expect(rover.board).to.be.truthy;
    });

  });

});
