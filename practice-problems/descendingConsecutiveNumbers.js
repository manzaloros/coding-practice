/*
 * Create a function that takes an array of integers and returns
 * 1 if there are at least three descending consecutive integers
 * in any part of the array. Return 0 if not.
 */

const hasThreeDescendingNumbers = (array, count = 0, prev = Infinity) => {
  for (let i = 0; i < array.length; i += 1) {
    [count, prev] = [(array[i] < prev ? count + 1 : 0), array[i]];
    if (count >= 3) return 1;
  }
  return 0;
};

const assert = require('assert').strict;
assert.equal(
  hasThreeDescendingNumbers([2, 6, 5, 4, 1]),
  1,
);

assert.equal(
  hasThreeDescendingNumbers([3, 2, 1]),
  1,
);

assert.equal(
  hasThreeDescendingNumbers([2, 9, 0, 2, 7, 1, 3]),
  0,
);
