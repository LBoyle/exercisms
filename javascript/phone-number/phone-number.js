var PhoneNumber = function(input) {
  this.number = () => {
    return this.getNumber(input);
  };
  this.areaCode = () => {
    return this.getNumber(input).slice(0, 3);
  };

  this.getNumber = (input) => {
    const temp = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '');

    if((temp.length > 11 || temp.length < 10) ||
      (temp.length === 11 && temp[0] !== '1'))
      return '0000000000';

    if(temp.length === 11 && temp[0] === '1')
      return temp.substr(1);
    return temp;
  };

  this.toString = () => {
    const numBody = this.getNumber(input).substr(3);
    return `(${this.areaCode()}) ${numBody.slice(0, 3)}-${numBody.substr(3)}`;
  };
};
module.exports = PhoneNumber;
