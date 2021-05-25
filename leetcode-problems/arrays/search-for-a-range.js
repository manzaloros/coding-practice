/* Given an array of integers nums sorted in ascending order, find the starting
and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8 Output: [3,4] Example 2:

Input: nums = [5,7,7,8,8,10], target = 6 Output: [-1,-1] Example 3:

Input: nums = [], target = 0 Output: [-1,-1]

Constraints:

0 <= nums.length <= 105 -109 <= nums[i] <= 109 nums is a non-decreasing array.
-109 <= target <= 109 */

const searchRange = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  const answer = [];
  let mid;

  // Find lower bound
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      if (mid === left || nums[mid - 1] !== target) {
        answer.push(mid);
        break;
      }
      right = mid - 1;
    }

    if (nums[mid] < target) left = mid + 1;
    if (nums[mid] > target) right = mid - 1;
  }

  left = 0;
  right = nums.length - 1;

  // find upper bound
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      if (mid === right || nums[mid + 1] !== target) {
        answer.push(mid);
        break;
      }
      left = mid + 1;
    }

    if (nums[mid] < target) left = mid + 1;
    if (nums[mid] > target) right = mid - 1;
  }

  if (answer.length > 0) return answer;

  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
