/* Jump Game II Given an array of non-negative integers nums, you are initially
positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

Example 1:

Input: nums = [2,3,1,1,4] Output: 2 Explanation: The minimum number of jumps to
reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the
last index.  Example 2:

Input: nums = [2,3,0,1,4] Output: 2

Constraints:

1 <= nums.length <= 1000 0 <= nums[i] <= 105 */

const jump = (nums) => {
  let [jumps, currentJumpEnd, farthest] = [0, 0, 0];

  for (let i = 0; i < nums.length - 1; i += 1) {
    // Check if our previous farthest reachable index is still the right
    // decision, else go with the current element's farthest
    farthest = Math.max(farthest, nums[i] + i);
    // Did we jump here?
    if (i === currentJumpEnd) {
      currentJumpEnd = farthest;
      jumps += 1;
    }
  }

  return jumps;
};

// jump([1, 2]);
jump([2, 3, 0, 1, 4]);
// jump([1, 1, 1, 1, 1, 9]);
// jump([1, 4, 1, 1, 1, 9]);
// jump([1, 5, 2, 8]);
// jump([1]);
// jump([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]);
