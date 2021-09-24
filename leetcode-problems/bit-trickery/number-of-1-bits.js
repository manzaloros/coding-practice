/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
  let count;
  // Each loop, this flips the least significant 1 to a 0. Keep doing that until
  // n is 0, the number of times you had to do it is the number of 1s in the number
  for (count = 0; n !== 0; count += 1) n &= (n - 1);
  return count;
};
