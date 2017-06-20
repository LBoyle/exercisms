var Words = function() {
  this.count = s => {
    this.s = s.replace(/[.,\/#@¡!¿?$%\^&\*;:{}=\-_`~()\s\n]/g, ' ')
      .replace(/\' /g, ' ')
      .replace(/ \'/g, ' ')
      .toLowerCase()
      .split(' ')
      .filter(Boolean);
    this.res = {};
    if(this.s.length === 1) {
      if(this.already(this.s)) this.res[this.s] += 1;
      if(!this.already(this.s)) this.res[this.s] = 1;
    } else {
      this.s.forEach(w => {
        if(this.already(w)) this.res[w] += 1;
        if(!this.already(w)) this.res[w] = 1;
      });
    }
    return this.res;
  };
  this.already = w => {
    return Object.keys(this.res).indexOf(w) >= 0;
  };
};

module.exports = Words;
