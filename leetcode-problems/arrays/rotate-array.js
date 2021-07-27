/* Given an array, rotate the array to the right by k steps, where k is
non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3 Output: [5,6,7,1,2,3,4] Explanation: rotate
1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps to the right:
[6,7,1,2,3,4,5] rotate 3 steps to the right: [5,6,7,1,2,3,4] Example 2:

Input: nums = [-1,-100,3,99], k = 2 Output: [3,99,-1,-100] Explanation: rotate 1
steps to the right: [99,-1,-100,3] rotate 2 steps to the right: [3,99,-1,-100]

Constraints:

1 <= nums.length <= 105 -231 <= nums[i] <= 231 - 1 0 <= k <= 105

Follow up:

Try to come up with as many solutions as you can. There are at least three
different ways to solve this problem.  Could you do it in-place with O(1) extra
space? */

// Time: O(length of array)
// Space: O(1)
const rotate = (nums, k) => {
  // make sure k is within nums length
  k %= nums.length;

  const reverseInPlace = (start = 0, end = nums.length - 1) => {
    start = start < 0 ? 0 : start;
    end = end > nums.length ? nums.length - 1 : end;

    for (let i = start, j = end; i < j && j > i; i += 1, j -= 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  // reverse entire array
  reverseInPlace();
  // reverse up to k
  reverseInPlace(0, k - 1);
  // reverse from k to the end
  reverseInPlace(k);

  return nums;
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
// rotate([-1, -100, 3, 99], 2); // [3,99,-1,100]
// rotate([1, 2], 3); // [2,1]
// rotate([1, 2, 3], 4); // [3,1,2]
