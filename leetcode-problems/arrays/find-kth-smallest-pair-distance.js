// O log n Time
// O n space
const smallestDistancePair = (nums, k) => {
  // O n log n
  nums.sort((a, b) => (a < b ? -1 : 1));
  const width = 2 * nums[nums.length - 1];

  // Space: O (n)
  const multiplicity = Array(nums.length).fill(0);
  // Time: O (n)
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) {
      multiplicity[i] = 1 + multiplicity[i - 1];
    }
  }

  // Space: O(2n)
  // represents number of points in nums <= each index
  const prefix = Array(width).fill(0);

  let left = 0;

  // Time: O(2n)
  for (let i = 0; i < width; i += 1) {
    while (left < nums.length && nums[left] === i) left += 1;
    prefix[i] = left;
  }

  let lo = 0;
  let hi = nums[nums.length - 1] - nums[0];

  // O log n
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);

    let count = 0;

    // O(n)
    for (let i = 0; i < nums.length; i += 1) {
      count += prefix[nums[i] + mid] - prefix[nums[i]] + multiplicity[i];
    }

    if (count >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};

smallestDistancePair([1, 6, 1], 3);
