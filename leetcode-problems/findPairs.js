/* Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
a <= b
b - a == k

Example:
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.

 */

const findPairs = (nums, k) => {
  // Find where the difference two numbers from nums is equal to k
  // Count the number of unique pairs of numbers

  let numberOfPairs = 0;
  const pairSet = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (j === i) {
        continue;
      }
      if ((nums[i] - nums[j] === k)
        && !pairSet.has(JSON.stringify([nums[i], nums[j]]))
        && !pairSet.has(JSON.stringify([nums[j], nums[i]]))) {
        numberOfPairs += 1;
        pairSet.add(JSON.stringify([nums[i], nums[j]]))
        pairSet.add(JSON.stringify([nums[j], nums[i]]))
      }
    }
  }

  return numberOfPairs;
}

console.log(findPairs([3, 1, 4, 1, 5], 2))