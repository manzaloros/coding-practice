/* Given an array of integers numbers that is already sorted in non-decreasing
order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of
size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not use
the same element twice.

Example 1:

Input: numbers = [2,7,11,15], target = 9 Output: [1,2] Explanation: The sum of 2
and 7 is 9. Therefore index1 = 1, index2 = 2.  Example 2:

Input: numbers = [2,3,4], target = 6 Output: [1,3] Example 3:

Input: numbers = [-1,0], target = -1 Output: [1,2]

Constraints:

2 <= numbers.length <= 3 * 104 -1000 <= numbers[i] <= 1000 numbers is sorted in
non-decreasing order.  -1000 <= target <= 1000 The tests are generated such that
there is exactly one solution.
 */
/*
         m
         l
         r
  2 7 11 15 , target: 9

  l  m  r       target, 6
  2, 3, 4

  l  m    r
  2, 2, 3, 4 .     target 4

*/
const twoSum = (nums, target) => {
  const binarySearch = (t) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === t) return mid;

      if (nums[mid] < t) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  };
  // for each number
  // binary search for complement in nums
  // use left bound so you don't repeat numbers
  // push current index and found index to result
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    const index = binarySearch(target - num);

    if (index !== -1 && index !== i) {
      result.push(i + 1, index + 1);
      break;
    }
  }

  // return result
  return result.sort((a, b) => (a < b ? -1 : 1));
};

const twoSumBetterBinary = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    // left is i+ 1 because you never want to consider the current index, since
    // we can't use duplicate numbers
    let left = i + 1;
    let right = nums.length - 1;
    let complement = target - nums[i];

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === complement) return [i + 1, mid + 1];

      if (nums[mid] < complement) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
};

// twoSum([2, 7, 11, 15], 9);
// twoSum([2, 3, 4], 6);
// twoSum([3, 24, 50, 79, 88, 150, 345],
// 200);
twoSum([1, 2, 3, 4, 4, 9, 56, 90],
  8);
