var expect = require('chai').expect;
var rover = require('../../rover/rover.js');

describe('Rover', function() {

  it('Has a board', function() {
    expect(rover.board).to.return(true)
  });

});
