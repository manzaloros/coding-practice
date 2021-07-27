/* eslint-disable no-bitwise */
/* Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:

Input: nums = [2,2,1] Output: 1 Example 2:

Input: nums = [4,1,2,1,2] Output: 4 Example 3:

Input: nums = [1] Output: 1

Constraints:

1 <= nums.length <= 3 * 104 -3 * 104 <= nums[i] <= 3 * 104 Each element in the
array appears twice except for one element which appears only once.
 */

// when you bitwise or (XOR) a number and itself, it will return that bit
// when you XOR two of the same bits it will return 0

const singleNumber = (nums) => {
  let a = 0;

  // a = a ^ num
  nums.forEach((num) => {
    a ^= num;
  });

  return a;
};

// 0 ^ 2 = 2
// 2 ^ 2 = 0
// 0 ^ 1 = 1
// singleNumber([2, 2, 1]);

singleNumber([4, 1, 2, 1, 2]);
