var Isogram = function(str) {
  return {
    isIsogram: () => {
      const arr = str.replace(/[-\s+]/g,'').toLowerCase().split('');

      return arr.length === [...new Set(arr)].length;
    }
  };
};
module.exports = Isogram;
