var DnaTranscriber = function() {
  var self = this;

  self.complements = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  self.isValidInput = function(dna) {
    dna.split('').forEach(function(x) {
      if(Object.keys(self.complements).indexOf(x) === -1) throw new Error('Invalid input');
    });
    return true;
  };

  self.toRna = function(dna) {
    if(self.isValidInput(dna)) return dna.split('').map(function(x) {
      return self.complements[x];
    }).join('');
  };
};

module.exports = DnaTranscriber;
