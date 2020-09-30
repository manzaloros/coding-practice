/* Given an unsorted integer array, find the smallest missing positive integer.

Example:
Input: [1,2,0]
Output: 3

Needs to run in O(n) time and constant space (this solution is not constant space)
*/

// First missing number can be in range from 1 to nums.length
const firstMissingPositive = (nums) => {
  const array = new Array(nums.length).fill(-1);
  let missing = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) {
      // Will create empty spaces in array if adding to an index greater than the current length
      array[nums[i] - 1] = 1;
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    // Since the array was originally filled with -1s, it will return 1 if the first element is a -1
    if (array[i] === -1) {
      return i + 1;
      break;
    }
  }
  return array.length + 1;
}