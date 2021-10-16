/*
Given an array A of N elements, you can perform the following operation any
number of times(possibly 0).  You can replace any integer of the array with an
integer.  Your task is to print the minimum operations required to make the
elements continuous.

Constraints: 1 <= N <= 1e6, 1 <= A[i] <= 1e9

Example: Input: 4 7 11 6 9 Output: 2 Explaination: We can replace 11 with 5 and
9 with 8, resulting in the array [4, 7, 8, 6, 5] which contains all the elements
from 4 to 8.
*/

// Not looking for ascending in order. Just looking to replace nums so that they
// would be ascending if you sorted them.
const minOperations = (arr) => {
  arr = Array.from(new Set(arr));

  arr.sort((a, b) => (a < b ? -1 : 1));

  const { length } = arr;
  /*
    For each num of the sorted array, you find the possible highest num that
    would make it continuous. So, for an array length 5 and the number 4, you
    add 4 to (5 - 1). E.g. that would make the array [4,5,6,7,8], with 8 being
    the upper bound. Do that for each num of the sorted array, finding the
    possible highest num.
  */
  const candidates = arr.map((num, i) => {
    const upperBound = num + length - 1;

    return [i, upperBound];
  });

  const binarySearch = (target) => {
    let [left, right] = [0, length - 1];

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (arr[mid] === target) return mid;

      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return right;
  };

  /*
    For each possible upper bound, find the closest num in the sorted array to
    it. So, for 4, the upper bound in that continuous array would be 8. The
    closest num less than or equal to 8 in the array is 7.

    Then, you take the closest index and subtract the index of the current num
    from the original array. If your closest index wasn't equal to the upper
    bound, subtract 1.

    To find the num of nums that are present that are needed for a continuous
    array, subtract the index and add 1. So for 4, you have 4, 6, and 7, so 3
    nums present. The missing nums will be the length - the present nums, so 2
    in this case.
  */
  const findMinOperations = ((max, [i, upperBound]) => {
    let closestIndexToUB = binarySearch(upperBound);

    if (closestIndexToUB >= length
      || arr[closestIndexToUB] !== upperBound) closestIndexToUB -= 1;

    const presentNums = closestIndexToUB - i + 1;
    const missingNums = length - presentNums;

    max = Math.min(max, missingNums);

    return max;
  });

  return candidates.reduce(findMinOperations, Infinity);
};

minOperations([4, 6, 7, 9, 11]); // 2. Replace 11 with 5 and 9 with 8.
