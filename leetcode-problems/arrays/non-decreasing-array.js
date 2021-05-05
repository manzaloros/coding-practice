/* Non-decreasing Array Given an array nums with n integers, your task is to
check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i
(0-based) such that (0 <= i <= n - 2).

Example 1:

Input: nums = [4,2,3] Output: true Explanation: You could modify the first 4 to
1 to get a non-decreasing array.  Example 2:

Input: nums = [4,2,1] Output: false Explanation: You can't get a non-decreasing
array by modify at most one element.

Constraints:

n == nums.length 1 <= n <= 104 -105 <= nums[i] <= 105 */

const checkPossibility = (nums, { length } = nums, modified = false, prev = -Infinity) => {
  if (length === 1) return true;

  for (let i = 0; i < length - 1; i += 1) {
    const [current, next] = [nums[i], nums[i + 1]];

    if (current > next && !modified) {
      if (prev <= next) {
        nums[i] = next;
      } else {
        nums[i + 1] = current;
      }

      modified = true;
    } else if (current > next && modified) return false;
    prev = nums[i];
  }

  return true;
};

checkPossibility([4, 2, 3]);
checkPossibility([3, 4, 2, 3]);
checkPossibility([5, 7, 1, 8]);
