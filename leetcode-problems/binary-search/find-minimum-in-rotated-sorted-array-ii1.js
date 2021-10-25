/**
 * @param {number[]} nums
 * @return {number}
 if array isn't rotated, or is rotated n times, min is at index 0

 if mid > right, inflection is somewhere to right of mid

 if mid < right, and right is < left, inflection is either mid or left
   of mid

 */
let findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];

  /*
    When right === left, you are at min element of array.

    If mid > right, you know mid cannot be min element, so you do left = mid +
    1. This is also because if left and right are 1 apart, mid will be the same
    as left.

    If mid < right, it could be min element, so don't do right = mid - 1, as you
    might go past the mid.

    If mid === right, you know min COULD be right if it's all the same element,
    or it could be to the left of right, so reduce search space from the right.

    You can't do left += 1 because you aren't comparing mid to left, and left
    could be the smallest element and you don't want to exclude it from the
    search space if so.

  */
  while (left < right /* && nums[left] !== nums[right] */) {
    const mid = left + Math.floor((right - left) / 2);
    const pivot = nums[mid];

    if (pivot < nums[right] /* mid <= right */) {
      right = mid;
    } else if (pivot > nums[right]) {
      left = mid + 1; /* left = mid; doing this can give you infinite loop if
        right is the min element */
    } else /* if (pivot === nums[right]) */ {
      right -= 1;
    }
  }

  /* if (nums[left + 1] < nums[left]) return left; */
  return nums[left];
};
