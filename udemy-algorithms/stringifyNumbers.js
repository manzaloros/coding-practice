/* Recursively stringify any values in an object and return that object*/

const stringifyNumbers = function (obj) {
  const isObj = (object) => typeof object === 'object'
    && object !== null
    && !Array.isArray(object);
  const isNum = (value) => typeof value === 'number';

  if (!isObj(obj)) return obj;

  const newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (isObj(value)) {
      newObj[key] = stringifyNumbers(value);
    } else if (isNum(value)) {
      newObj[key] = String(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj));