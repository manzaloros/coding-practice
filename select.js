function select(arr, obj) {
  return arr.reduce((acc, current) => {
    if (obj[current]) {
      acc[current] = obj[current];
      return acc;
    } else {
      return acc;
    }
  }, {})  
}

var arr = ['a', 'c', 'e'];
var obj = {
  a:1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);