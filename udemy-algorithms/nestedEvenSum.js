/* Recursively return sum of all even numbers in an object which has nested objects */

const nestedEvenSum = function (obj, sum = 0) {
  const isObj = (object) => typeof object === 'object' && object !== null;
  const isEvenNum = (num) => typeof num === 'number' && num % 2 === 0;

  if (!isObj(obj)) return;

  for (const key in obj) {
    const value = obj[key];
    if (isEvenNum(value)) sum += value;
    if (isObj(value)) sum += nestedEvenSum(value);
  }
  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};
// console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));