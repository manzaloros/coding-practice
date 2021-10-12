/* eslint-disable no-bitwise */
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
let rangeBitwiseAnd = function (left, right) {
  /* Given two numbers, find the common prefix of their binary strings

    Shift both nums to the right until they become equal, meaning the nums have
    been reduced to their common prefix. Append zeroes to the common prefix to
    get the result by shifting the common prefix to the left.
  */
  // naive:

  /*
    let num = left;
  for (let i = left + 1; i <= right; i += 1) {
    num &= i;
  }

  return num;
  */

  let numTimesShiftedRight = 0;

  while (left < right) {
    left >>= 1;
    right >>= 1;

    numTimesShiftedRight += 1;
  }

  return left << numTimesShiftedRight;
};
