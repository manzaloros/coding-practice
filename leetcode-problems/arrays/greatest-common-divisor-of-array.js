/**
 * @param {number[]} nums
 * @return {number}
 */
let findGCD = function (nums) {
  // O(n)
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  let i = min;

  // O(n)
  while (i >= 1) {
    if (min % i === 0 && max % i === 0) return i;

    i -= 1;
  }
};
