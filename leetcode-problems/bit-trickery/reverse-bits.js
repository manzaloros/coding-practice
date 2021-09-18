/* eslint-disable no-bitwise */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function (n) {
  let result = 0;
  let power = 31;

  while (n !== 0) {
    // get the rightmost bit of the number by doing n & 1. Left shifting by
    // power will reverse it to the correct position
    result += (n & 1) << power;
    // iterate bit from left to right, >>. Moves zeros in from the left,
    // shifting the number to the right.
    n >>= 1;
    power -= 1;
  }

  return result;
};

// Is this supposed to be a decimal number?
reverseBits(00000010100101000001111010011100);
