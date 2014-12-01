var five = require('johnny-five');

function Rover() {
  this.board = new five.Board();
}

  this.board.on('ready', function() {

    .motor01 = new five.Motor(); 

  });

};

var rover = new Rover;

console.log(rover);
console.log(rover.board);
module.exports = Rover;
