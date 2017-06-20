var PerfectNumbers = function() {
  this.classify = num => {
    if(num <= 0) return 'Classification is only possible for natural numbers.';
    let counter = 0;
    for (var i = 1; i < num; i++) {
      if(num%i === 0) counter += i;
    }
    if(counter === num) return 'perfect';
    if(counter < num) return 'deficient';
    if(counter > num) return 'abundant';
  };
};
module.exports = PerfectNumbers;
