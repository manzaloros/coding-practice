/* Given an array of non-negative integers nums, you are initially positioned at
the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: nums = [2,3,1,1,4] Output: true Explanation: Jump 1 step from index 0 to
1, then 3 steps to the last index.  Example 2:

Input: nums = [3,2,1,0,4] Output: false Explanation: You will always arrive at
index 3 no matter what. Its maximum jump length is 0, which makes it impossible
to reach the last index.

Constraints:

1 <= nums.length <= 104 0 <= nums[i] <= 105
 */

const canJump = (nums) => {
  const memo = {};

  const backtrack = (index) => {
    if (index >= nums.length - 1) return true;
    if (nums[index] === 0) {
      return false;
    }

    if (memo.hasOwnProperty(index)) return memo[index];

    let isPossible = false;
    for (let jumpLength = 1; jumpLength <= nums[index]; jumpLength += 1) {
      isPossible = backtrack(jumpLength + index);

      if (isPossible) break;
    }

    memo[index] = isPossible;

    return isPossible;
  };

  return backtrack(0);
};

canJump([3, 2, 1, 0, 4]);
// canJump([2, 3, 1, 1, 4]);
