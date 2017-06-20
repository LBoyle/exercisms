// even though it works, this solution is gross
// the requirements are gross
var Beersong = function() {
  const self = this;
  self.sing = (...args) => {
    let str = '';
    let count = args[0];
    if(args[1]) {
      while(count > args[1]-1){
        str += self.verse(count);
        if(count > args[1]) str += '\n';
        count--;
      }
      return str;
    } else {
      while(count > 0) {
        str += self.verse(count)+'\n';
        count--;
      }
      return str + self.noneLeft();
    }
  };
  self.verse = val => {
    if(val === 0) return self.noneLeft();
    const b = (val === 2) ? 'bottle' : 'bottles';
    return (val > 1) ? `${val} bottles of beer on the wall, ${val} bottles of beer.\nTake one down and pass it around, ${val-1} ${b} of beer on the wall.\n` : '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  };
  self.noneLeft = () => {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  };
};
module.exports = Beersong;
