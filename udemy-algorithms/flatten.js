/* Flatten an array recursively */

const flatten = function (arr) {
  if (arr.length === 0) return [];
  const newArray = Array.isArray(arr[0]) ?
    flatten(arr[0])
    : [arr[0]];
  return newArray.concat(flatten(arr.slice(1)));
}

// console.log(flatten([[1], [2], [3]]));
// console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));