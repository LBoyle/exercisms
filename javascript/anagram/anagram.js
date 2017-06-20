var Anagram = function(word) {
  this.word = word => {
    return word.toLowerCase().split('').sort().join('');
  };
  this.matches = (...input) => {
    if(typeof input[0] !== 'string') input = input[0];
    return input.map(w => {
      if(w.toLowerCase() !== word.toLowerCase() && this.word(w) === this.word(word)) return w;
    }).filter(Boolean);
  };
};
module.exports = Anagram;
