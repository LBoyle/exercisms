var BigInt = require('./big-integer');

var Grains = function() {
  this.board = {1: 1};
  this.init = () => {
    for (var i=2; i < 65; i++) {
      this.board[i] = BigInt(2).pow(i-1);
    }
  };
  this.square = num => {
    return this.board[num].toString();
  };
  this.total = () => {
    let num = BigInt(0);
    for (const key in this.board) {
      num = num.add(this.board[key]);
    }
    return num.toString();
  };
  this.init();
};
module.exports = Grains;
