/* Given an array of integers nums containing n + 1 integers where each integer
is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only
constant extra space.

Example 1:

Input: nums = [1,3,4,2,2] Output: 2 Example 2:

Input: nums = [3,1,3,4,2] Output: 3 Example 3:

Input: nums = [1,1] Output: 1 Example 4:

Input: nums = [1,1,2] Output: 1

Constraints:

1 <= n <= 105 nums.length == n + 1 1 <= nums[i] <= n All the integers in nums
appear only once except for precisely one integer which appears two or more
times.

Follow up:

How can we prove that at least one duplicate number must exist in nums?  Can you
solve the problem in linear runtime complexity? */

/*
if you could use extra space, you could just store a map of what you've seen so
far and return when you get to an element you've recorded in the map

we know the max number you'll is length of the array, so length 4 max would be 4
1 2 3 4

minimum is 1 even if array doesn't contain a 1
max is length

l   m   r
1 3 4 2 2
*/
const findDuplicate = (nums) => {
  // range of values in the target
  let [low, high] = [1, nums.length - 1];

  let duplicate = -1;

  // find smallest number whose count is > itself?
  while (low <= high) {
    const current = Math.floor((low + high) / 2);

    // count how many numbers are less than or equal to current
    let count = 0;
    nums.forEach((num) => {
      if (num <= current) count += 1;
    });

    if (count > current) {
      duplicate = current;
      high = current - 1;
    } else {
      low = current + 1;
    }
  }

  return duplicate;
};
