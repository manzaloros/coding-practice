/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i += 1) {
    maxJump = Math.max(nums[i] + i, maxJump);

    if (maxJump >= nums.length - 1) return true;
    if (maxJump === i) return false;
  }
};
