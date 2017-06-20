var usedNames = [];
var Robot = function() {
  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.numbers = '1234567890';
  this.randInt = length => {
    return Math.floor(Math.random()*length);
  };
  this.genName = () => {
    return this.alphabet[this.randInt(this.alphabet.length)]+
      this.alphabet[this.randInt(this.alphabet.length)]+
      this.numbers[this.randInt(this.numbers.length)]+
      this.numbers[this.randInt(this.numbers.length)]+
      this.numbers[this.randInt(this.numbers.length)];
  };
  this.checkName = () => {
    const name = this.genName();
    if(usedNames.includes(name)) return this.checkName();
    usedNames.push(name);
    return name;
  };
  this.reset = () => {
    this.name = this.checkName();
  };
  this.reset();
};
module.exports = Robot;
