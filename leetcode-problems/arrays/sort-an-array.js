/* Given an array of integers nums, sort the array in ascending order.

Example 1:

Input: nums = [5,2,3,1] Output: [1,2,3,5] Example 2:

Input: nums = [5,1,1,2,0,0] Output: [0,0,1,1,2,5]

Constraints:

1 <= nums.length <= 5 * 104 -5 * 104 <= nums[i] <= 5 * 104 */

const merge = (arr1, arr2) => {
  let merged = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  if (i < arr1.length) {
    merged = merged.concat(arr1.slice(i));
  } else if (j < arr2.length) {
    merged = merged.concat(arr2.slice(j));
  }

  return merged;
};

const sortArray = (nums) => {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const leftHalf = nums.slice(0, mid);
  const rightHalf = nums.slice(mid);

  return merge(sortArray(leftHalf), sortArray(rightHalf));
};

console.log(sortArray([5, 2, 3, 1]));
