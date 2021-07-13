/*
  Time limit exceeded, passes 87 out of 89 test cases
  O(n^2) time, O(n) space
*/
let subarraySum = function (nums, k) {
  const prefixSums = [0];
  let subarrays = 0;

  // Make prefix array, each index represents the sum of all elements before
  // that index in nums
  for (let i = 1; i <= nums.length; i += 1) {
    prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
  }

  // If your sum of the bigger subarray - smaller subarray === k, that means the
  // subarray contained within sums to k
  for (let i = 0; i < prefixSums.length; i += 1) {
    for (let j = i + 1; j < prefixSums.length; j += 1) {
      if (prefixSums[j] - prefixSums[i] === k) subarrays += 1;
    }
  }

  return subarrays;
};

/*

  Calculate the right subarray as you go (runningTotal). When you subtract k
  from that right subarray, you're getting the smaller subarray sum that you're
  looking for, and if you've seen that sum before, you increment the count by
  the number of times you've seen it.

  Starting seen with 0:1 is a similar idea to starting your prefix sums array at
  0, meaning the sum of all elements to the left of the first element is 0. This
  means that if we find a total - k to be 0 again, that's like finding our k in
  the prefix sum array, meaning there is an array with size 1 of our element.

  You add the previous count of prefixes found, and not 1, because
 */

const subarraySumSimplified = (nums, k) => {
  let runningTotal = 0;
  let subarrays = 0;
  const seen = { 0: 1 };
  const prefixes = [0];
  const counts = {};

  for (let i = 0; i < nums.length; i += 1) {
    const curr = nums[i];
    runningTotal += curr;

    const runningTotalMinusK = runningTotal - k;
    if (seen.hasOwnProperty(runningTotalMinusK)) subarrays += seen[runningTotalMinusK];

    seen[runningTotal] = seen[runningTotal] + 1 || 1;
  }

  return subarrays;
};

subarraySumSimplified([1, -1, 0], 0);
