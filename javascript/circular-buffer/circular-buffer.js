var CB = {};
CB.circularBuffer = len => {
  CB.b = new Array(len);
  CB.count = 0;
  CB.head = 0;
  CB.tail = 0;
  return CB;
};
CB.bufferEmptyException = () => {
  return new Error();
};
CB.bufferFullException = () => {
  return new Error();
};
CB.read = () => {
  if(CB.count === 0) throw CB.bufferEmptyException();
  const res = CB.b[CB.tail];
  CB.count--;
  CB.b[CB.tail] = undefined;
  CB.tail = (CB.tail+1)%CB.b.length;
  return res;
};
CB.write = val => {
  if(CB.count >= CB.b.length) throw CB.bufferFullException();
  if(val) {
    CB.count++;
    CB.b[CB.head] = val.toString();
    CB.head = (CB.head+1)%CB.b.length;
  }
};
CB.forceWrite = val => {
  if(val) {
    if(CB.count >= CB.b.length) {
      CB.b[CB.head] = val.toString();
      CB.tail = (CB.tail+1)%CB.b.length;
      CB.head = (CB.head+1)%CB.b.length;
    } else {
      CB.write(val);
    }
  }
};
CB.clear = () => {
  for (var i=0; i<CB.b.length; i++) CB.b[i] = undefined;
  CB.count = 0;
  CB.head = 0;
  CB.tail = 0;
};
module.exports = CB;
