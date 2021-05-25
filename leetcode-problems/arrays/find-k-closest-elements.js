/* Given a sorted integer array arr, two integers k and x, return the k closest
integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or |a - x| == |b - x| and a < b

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3 Output: [1,2,3,4] Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1 Output: [1,2,3,4]

Constraints:

1 <= k <= arr.length 1 <= arr.length <= 104 arr is sorted in ascending order.
-104 <= arr[i], x <= 104 */

const findClosestElements = (arr, k, x) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    // Keeping track of lower bound of window
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr.slice(left, left + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 2, 3));
