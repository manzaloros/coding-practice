/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let curr = nums[0];
  let max = nums[0];

  nums.forEach((num, i) => {
    if (i > 0) {
      // What's bigger: starting a new subarray with the curr num, or adding the
      // curr num to your older subarray?
      curr = Math.max(num, curr + num);
      // What's bigger, the max subarray you've seen so far, or your current subarray?
      max = Math.max(max, curr);
    }
  });

  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
