var SpaceAge = function(input) {
  this.seconds = input;

  this.onEarthExact = () => {
    return parseFloat((this.seconds)/31557600);
  };
  this.onEarth = () => {
    return parseFloat(this.onEarthExact().toFixed(2));
  };
  this.onMercury = () => {
    return this.calculate(0.2408467);
  };
  this.onVenus = () => {
    return this.calculate(0.61519726);
  };
  this.onMars = () => {
    return this.calculate(1.8808158);
  };
  this.onJupiter = () => {
    return this.calculate(11.862615);
  };
  this.onSaturn = () => {
    return this.calculate(29.447498);
  };
  this.onUranus = () => {
    return this.calculate(84.016846);
  };
  this.onNeptune = () => {
    return this.calculate(164.79132);
  };
  this.calculate = (num) => {
    return parseFloat(((this.onEarthExact())/num).toFixed(2));
  };
};
module.exports = SpaceAge;
