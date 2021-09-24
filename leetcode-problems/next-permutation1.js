/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function (nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) i -= 1;

  const swap = (a, b) => { [nums[a], nums[b]] = [nums[b], nums[a]]; };

  const reverse = (a) => {
    let b = nums.length - 1;

    while (a < b) {
      swap(a, b);

      a += 1;
      b -= 1;
    }
  };

  // Only do this swapping step if you're not on the last permutation, which
  // would be i = -1 since nums[i+ 1] will always be <= nums[i] in that case,
  // like [5,4,3,2,1]
  if (i >= 0) {
    let j = nums.length - 1;
    // to find the next biggest number, just start at end and go backwards while
    // nums[j] is <= nums[i]
    while (nums[j] <= nums[i]) j -= 1;

    swap(i, j);
  }

  reverse(i + 1);
};
