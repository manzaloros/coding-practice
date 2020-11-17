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

const maxSubarraySum = function (arr, l, [maxSum, currentSum] = [-Infinity, 0]) {
  if (arr.length < l) return null

  for (let i = 0; i < l; i += 1) {
    currentSum += arr[i];
  }

  // return arr.reduce((max, curr, i) => {
  //   // if (i >= l) {
  //   //   currentSum = (currentSum - arr[i - l]) + curr;
  //   //   return Math.max(max, currentSum);
  //   // } else {
  //   //   currentSum += curr;
  //   // }
  //   // return -Infinity;
  //   currentSum = (i >= l) ? (currentSum - arr[i - l]) + curr : currentSum += curr;
  //   return (i >= l) ? Math.max(max, currentSum) : -Infinity;
  // }, 0);

  /* For loop, easier to understand: */
  for (let i = l; i < arr.length; i += 1) {
    maxSum = Math.max(maxSum, currentSum);
    // Current sum - old previous first element + new last element
    // Shifting window right
    currentSum = (currentSum - arr[i - l]) + arr[i];
  }

  return Math.max(maxSum, currentSum);
}

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([1, 2, 3, 4], 2));