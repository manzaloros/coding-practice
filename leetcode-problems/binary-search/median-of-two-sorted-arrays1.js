/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (x, y) {
  if (x.length > y.length) return findMedianSortedArrays(y, x);

  let [left, right] = [0, x.length];

  while (left <= right) {
    let midX = Math.floor((left + right) / 2);
    let midY = Math.floor((x.length + y.length + 1) / 2) - midX;

    let maxLeftX = midX === 0 ? -Infinity : x[midX - 1];
    let maxLeftY = midY === 0 ? -Infinity : y[midY - 1];
    let minRightX = midX === x.length ? Infinity : x[midX];
    let minRightY = midY === y.length ? Infinity : y[midY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x.length + y.length) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      }

      return Math.max(maxLeftX, maxLeftY);
    }

    if (minRightX < maxLeftY) {
      left = midX + 1;
    } else {
      right = midX - 1;
    }
  }
};

findMedianSortedArrays([1, 3], [2]);
// 44 min
