/* Uses nested loop: */
/*
const maxSubarraySum = (nums, l, [max, currMax, { length }, j] = [0, 0, nums, l]) => {
  if (l > length) return null;
  for (let i = 0; i < (length - l); i += 1) {
    while (j > 0) {
      currMax += nums[i + j];
      j -= 1;
    }
    max = Math.max(currMax, max);
    [j, currMax] = [l, 0];
  }
  return max;
} */

const maxSubarraySum = function (arr, l) {
  if (arr.length < l) return null
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < l; i += 1) {
    currentSum += arr[i];
  }

  for (let i = l; i < arr.length; i += 1) {
    maxSum = Math.max(maxSum, currentSum);
    currentSum = currentSum - arr[i - l] + arr[i];
  }

  return Math.max(maxSum, currentSum);
}

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([1, 2, 3, 4], 2));