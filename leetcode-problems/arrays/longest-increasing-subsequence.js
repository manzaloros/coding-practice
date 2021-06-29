/* Given an integer array nums, return the length of the longest strictly
increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some
or no elements without changing the order of the remaining elements. For
example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:

Input: nums = [10,9,2,5,3,7,101,18] Output: 4 Explanation: The longest
increasing subsequence is [2,3,7,101], therefore the length is 4.  Example 2:

Input: nums = [0,1,0,3,2,3] Output: 4 Example 3:

Input: nums = [7,7,7,7,7,7,7] Output: 1

Constraints:

1 <= nums.length <= 2500 -104 <= nums[i] <= 104

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time
complexity? */

const lengthOfLIS = (nums) => {
  const memo = new Map();
  const backtrack = (index, largestSoFar) => {
    // base cases
    if (index === nums.length - 1) {
      return nums[index] > largestSoFar ? 1 : 0;
    }

    const sizes = [];
    for (let i = index; i < nums.length; i += 1) {
      if (nums[i] > largestSoFar) {
        sizes.push(1 + backtrack(index + 1, nums[i]));
      }
    }

    if (sizes.length > 0) { return Math.max(...sizes); }
    return 0;
  };

  return backtrack(0, -Infinity, 0);
};

const lengthOfLISRohan = (nums) => {
  // prev: index of previous number in sequence
  // curr: index of number we're considering adding to sequence
  const backtrack = (prev, curr) => {
    if (curr >= nums.length) return 0;

    // only try adding to sequence if sequence not started
    // or prev number is strictly < curr number
    if (prev < 0 || (nums[curr] > nums[prev])) {
      return Math.max(
        1 + backtrack(curr, curr + 1), // add to sequence
        backtrack(prev, curr + 1), // don't add
      );
    }

    return backtrack(prev, curr + 1); // don't add
  };

  return backtrack(-1, 0);
};

/*
  Time: O(length of nums^2)
  Space: O(length of nums)
*/
const lengthOfLISBottomUp = function (nums) {
  const dp = Array(nums.length).fill(1);

  // O(n)
  for (let i = 1; i < nums.length; i += 1) {
    const curr = nums[i];
    // check all numbers before nums[i]
    // O(n)
    for (let j = 0; j < i; j += 1) {
      const possibility = nums[j];
      if (curr > possibility) {
      // check if adding the possibility will increase the subsequence already built ending at dp[i]
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  // O(n)
  return Math.max(...dp);
};

// lengthOfLIS([1, 2, 3, 4]);
lengthOfLIS([0, 1, 0, 3, 2, 3]);
// lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
// lengthOfLIS([0, 1, 0, 3]);
// lengthOfLIS([4, 10, 4, 3, 8, 9]);

// const array = Array(2500).fill(0).map((_, i) => i + 1);
// lengthOfLIS(array);
// lengthOfLIS([1, 2, 1]);
