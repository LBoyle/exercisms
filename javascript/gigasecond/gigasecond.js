var Gigasecond = function(date) {
  return {
    date: () => {
      return new Date(date.getTime()+Math.pow(10, 12));
    }
  };
};

module.exports = Gigasecond;
