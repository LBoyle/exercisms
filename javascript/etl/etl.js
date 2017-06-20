var ETL = function() {
  this.transform = data => {
    const newData = {};
    Object.keys(data).forEach(key => {
      data[key].forEach(val => {
        newData[val.toLowerCase()] = parseInt(key);
      });
    });
    return newData;
  };
};
module.exports = ETL;
