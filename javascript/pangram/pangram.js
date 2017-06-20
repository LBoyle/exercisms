var Pangram = function(input) {
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  this.isPangram = () => {
    let valid = true;
    this.alphabet.forEach(letter => {
      if(!input.toLowerCase().includes(letter)) valid = false;
    });
    return valid;
  };
};

module.exports = Pangram;
