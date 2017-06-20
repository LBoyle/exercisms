var Isogram = function(str) {
  return {
    isIsogram: () => {
      const arr = str.replace(/[-\s+]/g,'').toLowerCase().split('');
      
      return arr.length === [...new Set(arr)].length;
    }
  };
};
module.exports = Isogram;

// I looked at a bunch of regex on stackoverflow, not my bag, worked this one out for this specific use case
