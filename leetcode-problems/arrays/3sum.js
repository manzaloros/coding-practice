const threeSum = (nums) => {
  // O(n log n)
  nums.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));

  const set = new Set();

  for (let i = 0; i < nums.length && nums[i] <= 0; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum < 0) {
          j += 1;
        } else if (sum > 0) {
          k -= 1;
        } else {
          set.add([nums[i], nums[j], nums[k]]);

          j += 1;
          k -= 1;

          while (i < k && nums[j] === nums[j - 1]) j += 1;
        }
      }
    }
  }

  return Array.from(set);
};
