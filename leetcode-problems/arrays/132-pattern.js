/* Given an array of n integers nums, a 132 pattern is a subsequence of three
integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k]
< nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Example 1:

Input: nums = [1,2,3,4] Output: false Explanation: There is no 132 pattern in
the sequence.  Example 2:

Input: nums = [3,1,4,2] Output: true Explanation: There is a 132 pattern in the
sequence: [1, 4, 2].  Example 3:

Input: nums = [-1,3,2,0] Output: true Explanation: There are three 132 patterns
in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

Constraints:

n == nums.length 1 <= n <= 2 * 105 -109 <= nums[i] <= 109
 */

/*
  subsequence can be non-contiguous numbers?

  [1032] would work

  return bool if one exists in nums
*/

const find132pattern = (nums) => {
  // iterate over every element (nested loop)
  // when you have stack < length 2 push increasing values
  // when you have stack === length only push decreasing values that are less
  // than stack[0]

  const stack = [];
  let s3 = -Infinity;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const current = nums[i];
    if (current < s3) return true;

    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      // When you set s3, that means you've found a value that is a lesser index
      // and greater than a value that comes after. so if you find another value
      // at an even lesser index that is less than the value you popped, it will
      // fulfill the [less greatest greater] condition.
      s3 = stack[stack.length - 1];
      stack.pop();
    }

    stack.push(current);
  }

  return false;
};

find132pattern([3, 1, 4, 2]);
