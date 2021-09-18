// Time: O(n * log n)
// Space: O(n log n) call stack
const merge = (leftSkyline, rightSkyline) => {
  /*
    inst merged skyline array
      leftPointer rightPointer = 0
      merged x coord is 0
      right height as 0
      left height Y as 0

    while the leftP is less than left length or rightP is less than right length
      inst leftX as left[leftP][0]
        leftY as left[leftP][1]
        rightX as right[rightP][0]
        rightY as right[rightP][1]
        mergedX as 0

      if leftX < rightX
        mergedX = leftX
        leftP increment
        left height is leftY

      else if leftX > rightX
        mergedX = rightX
        rightP increment
        right height is rightY

      else
        mergedX = leftX
        left and rightP increment
        if left height is > right height, left height is left Y
        else, right height is rightY

      inst merged height as max of left height or right height

      if (merged array length is 0 or height is not equal to merged array last element[1])
        merged push [mergedX, merged height]

    add remaining elements from left / right to merged

    return merged
  */
  let mergedSkyline = [];
  let [leftPointer, rightPointer] = [0, 0];
  let [leftHeight, rightHeight] = [0, 0];
  let mergedX = 0;

  while (leftPointer < leftSkyline.length && rightPointer < rightSkyline.length) {
    let leftEdge = leftSkyline[leftPointer];
    let rightEdge = rightSkyline[rightPointer];

    let leftX = leftEdge[0];
    let leftY = leftEdge[1];

    let rightX = rightEdge[0];
    let rightY = rightEdge[1];

    if (leftX < rightX) {
      mergedX = leftX;
      leftHeight = leftY;

      leftPointer += 1;
    } else if (leftX > rightX) {
      mergedX = rightX;
      rightHeight = rightY;

      rightPointer += 1;
    } else {
      mergedX = leftX;
      leftHeight = leftY;
      rightHeight = rightY;

      leftPointer += 1;
      rightPointer += 1;
    }

    const height = Math.max(leftHeight, rightHeight);

    if (mergedSkyline.length === 0 || height !== mergedSkyline[mergedSkyline.length - 1][1]) {
      const newPoint = [mergedX, height];
      mergedSkyline.push(newPoint);
    }
  }

  const remainingElements = [];

  while (leftPointer < leftSkyline.length) {
    remainingElements.push(leftSkyline[leftPointer]);
    leftPointer += 1;
  }

  while (rightPointer < rightSkyline.length) {
    remainingElements.push(rightSkyline[rightPointer]);
    rightPointer += 1;
  }

  mergedSkyline.push(...remainingElements);

  return mergedSkyline;
};

const getSkyline = (b, left = 0, right = b.length - 1) => {
  // if 0 (or l > r) buildings, return []
  if (left > right) return [];

  // if 1 (or l === r)
  //  make one building
  //  starting coords:
  //  x coord is b[left][0]
  //  y coord is b[left][2]
  //  ending coords:
  //  x coord is b[left][1]
  //  y coord is 0
  //  return [[starting coords], [ending coords]]
  if (left === right) {
    const startX = b[left][0];
    const startY = b[left][2];

    const endX = b[left][1];
    const endY = 0;

    return [[startX, startY], [endX, endY]];
  }

  // get mid by left + floor((right - left) / 2)
  // left half is b[0, mid]
  // right half is b[mid + 1, right]
  const mid = left + Math.floor((right - left) / 2);

  const leftHalf = getSkyline(b, left, mid);
  const rightHalf = getSkyline(b, mid + 1, right);

  // makes new arrays
  // get skyline of left half
  // get skyline of right half

  // merge halves
  const merged = merge(leftHalf, rightHalf);

  // return merged halves
  return merged;
};

// getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]);
getSkyline([[2, 9, 10], [9, 12, 15]]);
