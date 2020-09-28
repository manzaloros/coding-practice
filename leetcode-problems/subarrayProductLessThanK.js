/*
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example: Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Note:

0 < nums.length <= 50000.
0 < nums[i] < 1000.
0 <= k < 10

*/

const numSubarrayProductLessThanK = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let subarray = nums[i];
    if (subarray < k) {
      count += 1;
      for (let j = i + 1; j < nums.length; j += 1) {
        subarray *= nums[j];
        if (subarray < k) {
          count += 1;
        } else {
          break;
        }
      }
    }
  }
  return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))