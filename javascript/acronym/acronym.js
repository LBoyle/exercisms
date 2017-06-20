var Acronyms = {
  parse: s => {
    s = s.replace(/[.,\/#@¡!¿?$%\^&\*;:{}=\-_`~()\s\n]/g, ' ')
      .replace(/\' /g, ' ')
      .replace(/ \'/g, ' ')
      .split(' ')
      .filter(Boolean);
    let acr = '';
    s.forEach(w => {
      acr += w[0].toUpperCase();
      for (var i=1; i < w.length; i++) {
        if(
          w[i] === w[i].toUpperCase() &&
          w[i-1] !== w[i-1].toUpperCase()
        ) acr += w[i];
      }
    });
    return acr;
  }
};
module.exports = Acronyms;
