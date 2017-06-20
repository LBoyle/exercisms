var Triangle = function(a,b,c) {
  this.kind = () => {
    if(a <= 0 || b <= 0 || a <= 0 ||
      a+b < c || b+c < a || a+c < b)
      throw new Error();
    if((a+b+c)/3 === a) return 'equilateral';
    if((a === b && a+b === c)||
      (b === c && b+c === a)||
      (a === c && a+c === b))
      return 'degenerate';
    if(a === b || b === c || a === c)
      return 'isosceles';
    if(a !== b && b !== c && a !== c)
      return 'scalene';
  };
};
module.exports = Triangle;
