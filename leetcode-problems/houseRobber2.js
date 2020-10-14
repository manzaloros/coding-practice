/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.



Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [0]
Output: 0


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000

*/


/* *
  Since its circular we want to avoid adding an element at the first place
  with an element at the last place in the array
  So we use 2 loops:
  1. From index 0 to nums.length - 2
  2. From index 1 to nums.length - 1
*/
const rob = (nums) => {
  const length = nums.length;
  if (length === 1) return nums[0];

  const nums1 = nums.slice();
  return Math.max(max(nums, 0, length - 1), max(nums1, 1, length));
}

const max = (nums, start, length) => {
  let maximum = 0;

  for (let i = start; i < length; i += 1) {
    if ((i - 2) < start) {
      maximum = Math.max(maximum, nums[i]);
    } else {
      maximum = Math.max(maximum, nums[i] + nums[i - 2]); // Avoiding adjacent house
    }
    nums[i] = maximum; // Adding max entry to same array for further consideration
  }

  return maximum; // Return max element at end
}

// Tests:
// rob([0]) // 2
// rob([2, 3, 2]) //3
rob([1, 2, 3, 1]) //4
// rob([1]) //1
// rob([1, 3, 1, 100]);