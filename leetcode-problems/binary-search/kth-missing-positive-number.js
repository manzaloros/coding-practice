/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
let findKthPositive = function (arr, k) {
  let [left, right] = [0, arr.length - 1];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const missingNumsLeftOfRight = arr[mid] - mid - 1;

    if (missingNumsLeftOfRight < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return k + left;
};
