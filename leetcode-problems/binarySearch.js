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
    let middleIndex = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
    let middle = nums[middleIndex];
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
}
