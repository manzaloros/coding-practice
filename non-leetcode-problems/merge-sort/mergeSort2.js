const assert = require('assert');
/*
break up array into halves until you have arrays that are empty or have one element
*/
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const halfway = Math.floor(arr.length / 2);
  const half1 = arr.slice(0, halfway)
  const half2 = arr.slice(halfway, arr.length);

  return merge(mergeSort(half1), mergeSort(half2));
}

const merge = (arr1, arr2) => {
  let [i, j] = [0, 0];

  const sorted = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i += 1;
    } else {
      sorted.push(arr2[j]);
      j += 1;
    }
  }
  const remaining = i === arr1.length ? arr2.slice(j) : arr1.slice(i);
  return sorted.concat(remaining);
}

const arr1 = [1, 2, 3];
const arr2 = [1.5, 2.5, 4]

// Testing merge function
console.log(merge(arr1, arr2), "should be [1,1.5, 2, 2.5, 3,4]")
const unSorted = [1, 0, -1, 5, 2];
console.log(mergeSort(unSorted))
assert.deepStrictEqual(mergeSort(unSorted), unSorted.sort((a, b) => a - b), `Arrays aren't equal`);