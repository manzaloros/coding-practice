/*
Given an integer array nums and an integer k, return true if there are two
distinct indices i and j in the array such that nums[i] == nums[j] and abs(i -
j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3 Output: true Example 2:

Input: nums = [1,0,1,1], k = 1 Output: true Example 3:

Input: nums = [1,2,3,1,2,3], k = 2 Output: false

Constraints:

1 <= nums.length <= 105 -109 <= nums[i] <= 109 0 <= k <= 105 */

/*
  TC: O(n)
  SC: O(min(n, k))
*/
const containsNearbyDuplicate = (nums, k) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    if (set.has(current)) {
      return true;
    }
    // Add the current number if it's not in the set
    set.add(current);
    // If the size of the set is greater than k, there can't be any values at
    // lower indexes than k satisfy our condition, so delete the item - k index
    // in the set
    // It's a sliding set window
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 0, 1, 2, 3], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
