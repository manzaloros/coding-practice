/* Recursively return an array of strings from an object's values that are strings*/

const collectStrings = function (obj, arrayOfStrings = []) {
  const isString = (value) => typeof value === 'string';
  const isObj = (object) => typeof object === 'object'
    && object !== null
    && !Array.isArray(object);

  for (const [key, value] of Object.entries(obj)) {
    if (isObj(value)) arrayOfStrings.push(...collectStrings(value));
    if (isString(value)) arrayOfStrings.push(value);
  }

  return arrayOfStrings;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj))