/**
 * O(N^2)
 *
 * Sort because order doesn't matter and we want lower numbers first and higher
 * numbers later.
 *
 * Iterate i from 0 to length. Can also constrain with nums[i] being less than
 * or equal to zero, but not necessary.
 *
 * Then, j is i + 1 and k is length - 1. Skip any loop where i is the same as
 * i-1, since we don't want duplicates.
 *
 * While j is less than k, get the sum of all three elements. If the sum is less
 * than zero, increase j. Greater than zero, decrease k. Else if it equals, add
 * the triplet to the result. Then, increment j and decrement k, making the
 * subarray smaller. Also, if you get this match, you also need to increment j
 * if its the same as the previous element, since you already added it and you
 * don't want duplicate elements.
 */
const threeSum = (nums) => {
  // O(n log n)
  nums.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));

  const result = [];

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
          result.push([nums[i], nums[j], nums[k]]);

          j += 1;
          k -= 1;

          while (j < k && nums[j] === nums[j - 1]) j += 1;
        }
      }
    }
  }

  return result;
};
