/* Given an array of integers nums and an integer k, return the total number of
continuous subarrays whose sum equals to k.

Example 1:

Input: nums = [1,1,1], k = 2 Output: 2 Example 2:

Input: nums = [1,2,3], k = 3 Output: 2

Constraints:

1 <= nums.length <= 2 * 104 -1000 <= nums[i] <= 1000 -107 <= k <= 107
 */

/*
  "Continuous" means "contiguous", here, right?
*/

// does NOT include an empty array, so if you look for k = 0, you will only
// include numbers that sum to 0, not the empty array.
const subarraySum = (nums, k) => {
  let numberOfSubarrays = 0;
  let runningTotal = 0;
  // Start off with 1 occurence of sum 0
  const sumOccurrences = new Map().set(0, 1);

  nums.forEach((num) => {
    runningTotal += num;

    // without the (- k), you're checking how many times your running sum has
    // been 0. Any time you've seen a total - k before means you've found a new
    // subarray with the sum k. So you add how many times you've seen the total
    // before to your number of subarrays.
    const runningTotalMinusK = sumOccurrences.get(runningTotal - k);
    if (runningTotalMinusK) numberOfSubarrays += runningTotalMinusK;

    // Update how many times this sum has occured
    const occurencesOfCurrentTotal = sumOccurrences.get(runningTotal);
    if (!occurencesOfCurrentTotal) {
      sumOccurrences.set(runningTotal, 1);
    } else {
      sumOccurrences.set(runningTotal, occurencesOfCurrentTotal + 1);
    }
  });

  return numberOfSubarrays;
};

subarraySum([1, -1], 0);
