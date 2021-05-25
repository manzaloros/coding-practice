/* There is an integer array nums sorted in ascending order (with distinct
values).

Prior to being passed to your function, nums is rotated at an unknown pivot
index k (0 <= k < nums.length) such that the resulting array is [nums[k],
nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For
example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become
[4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index
of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0 Output: 4 Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3 Output: -1 Example 3:

Input: nums = [1], target = 0 Output: -1

Constraints:

1 <= nums.length <= 5000 -104 <= nums[i] <= 104 All values of nums are unique.
nums is guaranteed to be rotated at some pivot.  -104 <= target <= 104 */

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);

    if (nums[pivot] === target) return pivot;

    // If the left subarray less than the pivot is in order
    if (nums[pivot] >= nums[0]) {
      if (target >= nums[0] && nums[pivot] > target) right = pivot - 1;
      else left = pivot + 1;
      // Otherwise, if the right subarray is in order, target is in the right
      // subarray, and your pivot is less than the target, search on the right half
    } else if (target <= nums[nums.length - 1] && nums[pivot] < target) left = pivot + 1;
    // Otherwise, target is on the left half of the array and greater than the
    // end of the array,and the pivot is greater than the target,
    else right = pivot - 1;
  }

  return -1;
};

console.log(search([3, 5, 1], 3));
