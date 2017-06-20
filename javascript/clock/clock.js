var Clock = {
  at: function(...args) {
    Clock.ms = (args.length > 1) ?
      (args[0]*60*60*1000)+(args[1]*60*1000) :
      (args[0]*60*60*1000);
    return Clock.sendTime(Clock.createDate(Clock.ms));
  },
  sendTime: date => {
    return date.toTimeString().substr(0, 5);
  },
  createDate: ms => {
    return new Date(ms);
  }
};
String.prototype.plus = (mins=0) => {
  return Clock.sendTime(Clock.createDate(Clock.ms + mins*60*1000));
};
String.prototype.minus = (mins=0) => {
  return Clock.sendTime(Clock.createDate(Clock.ms - mins*60*1000));
};
String.prototype.equals = function(dateToCheck) {
  // this is the string value of the previous .at call
  return this.toString() === dateToCheck;
};
module.exports = Clock;
