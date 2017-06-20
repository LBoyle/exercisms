var Bob = function() {

  this.isOnlySpaces = str => {
    return !str.map(char => {
      return (char === ' ') ? true : false;
    }).includes(false);
  };

  this.hasAlphaChars = str => {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(char => {
      return (str.includes(char)) ? true : false;
    }).includes(true);
  };

  this.hey = input => {
    if(!input || this.isOnlySpaces(input.split(''))) return 'Fine. Be that way!';
    if(this.hasAlphaChars(input.split('')) && input === input.toUpperCase()) return 'Whoa, chill out!';
    if(input.slice(-1) === '?') return 'Sure.';
    return 'Whatever.';
  };
};
module.exports = Bob;
