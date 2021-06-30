/* Given a non-empty array nums containing only positive integers, find if the
array can be partitioned into two subsets such that the sum of elements in both
subsets is equal.

Example 1:

Input: nums = [1,5,11,5] Output: true Explanation: The array can be partitioned
as [1, 5, 5] and [11].  Example 2:

Input: nums = [1,2,3,5] Output: false Explanation: The array cannot be
partitioned into equal sum subsets.

Constraints:

1 <= nums.length <= 200 1 <= nums[i] <= 100
 */

const canPartition = (nums) => {
  const memo = {};
  const sum = nums.reduce((s, c) => s + c);

  const backtrack = (subsetSum, index) => {
    if (subsetSum === sum) return true;
    if (subsetSum > sum || index >= nums.length) return false;

    const key = `${subsetSum}:${index}`;
    if (memo.hasOwnProperty(key)) return memo[key];

    const isPossible = backtrack(subsetSum + nums[index + 1], index + 1)
    || backtrack(subsetSum, index + 1);

    memo[key] = isPossible;
    return isPossible;
  };

  return backtrack(0, -1);
};

canPartition([1, 2, 3, 5]);
