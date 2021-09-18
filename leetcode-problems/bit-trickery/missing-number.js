/* eslint-disable no-bitwise */
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time, O(1) space.
let missingNumber = function (nums) {
  // Start with 0 to compare each number and it's index with.
  let xor = 0;

  // Since a ^ b ^ a = b, you can keep xoring (exclusive or) an accumulator and
  // the current array element and it's index.
  nums.forEach((num, i) => { xor = xor ^ i ^ num; });

  // At the end, you will have a number left over when XORing the final
  // accumulator and the last index, indicating the number that is missing from
  // the array.
  return xor ^ nums.length;
};
