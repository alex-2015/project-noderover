var five = require('johnny-five');

function Rover() {
  this.board = new five.Board();
};

module.exports = Rover;
