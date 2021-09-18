const findMedianSortedArrays = (arr1, arr2) => {
  // Make arr1 the shorter array
  if (arr1.length > arr2.length) return findMedianSortedArrays(arr2, arr1);

  let [x, y] = [arr1.length, arr2.length];

  let [lo, hi] = [0, x];

  while (lo <= hi) {
    let partitionX = Math.floor((lo + hi) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxLeftX = (partitionX === 0) ? -Infinity : arr1[partitionX - 1];
    let minRightX = (partitionX === x) ? Infinity : arr1[partitionX];

    let maxLeftY = (partitionY === 0) ? -Infinity : arr2[partitionY - 1];
    let minRightY = (partitionY === y) ? Infinity : arr2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      }

      return Math.max(maxLeftX, maxLeftY);
    }

    if (maxLeftX > minRightY) {
      hi = partitionX - 1;
    } else lo = partitionX + 1;
  }
};

// findMedianSortedArrays([5, 7, 9], [13, 20, 21]);
findMedianSortedArrays([1, 2], [3, 4]);
