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
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));