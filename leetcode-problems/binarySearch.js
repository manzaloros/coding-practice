/* Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

*/

// const search = (nums, target) => {
//   let upperBound = nums.length;
//   // Why is -1?
//   let lowerBound = -1;

//   let middleIndex = Math.floor((upperBound - lowerBound) / 2);

//   while (upperBound > lowerBound) {
//     let middle = nums[middleIndex];
//     if (middle === target) {
//       return middleIndex;
//     }
//     if (middle > target) {
//       upperBound = middleIndex - 1;
//     }
//     if (middle < target) {
//       lowerBound = middleIndex + 1;
//     }
//     middleIndex = middleIndex + lowerBound;
//   }
//   return -1;
// }

// From interview cake, explore how it is different than my original solution above:f
const search = (nums, target) => {
  let upperBound = nums.length;
  // Why is -1?
  // Because we are starting lower bound to the "left" of our 0th index
  let lowerBound = -1;

  while (lowerBound + 1 < upperBound) {
    const middleIndex = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
    const middle = nums[middleIndex];
    if (middle === target) {
      return middleIndex;
    }
    if (middle > target) {
      upperBound = middleIndex;
    } else {
      lowerBound = middleIndex;
    }
  }
  return -1;
};

/*
  Use iterative rather than recursive. Recursive stores calls on the callstack,
  which has a max of 60 frames. Since search uses O log2 n space, we would have
  to have a number that is greater than 2 ^ 60th power to overflow the stack,
  which is probably too big of a number anyway.

  Iterative just keeps track using pointers.
*/
const searchLeetCode = function (nums, target, left = 0, right = nums.length - 1) {
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
