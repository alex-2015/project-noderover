var expect = require('chai').expect;
var Rover = require('../../rover/rover.js');

describe('Rover', function() {

  describe('Setup', function() {

    it('has a board', function() {
      var rover = new Rover;
      console.log(rover);
      expect(rover.board).to.be.truthy;
    });

    it('has a motor01', function() {
      var rover = new Rover;
      expect(rover.motor01).not.to.be.undefined;
    });

  });

});
