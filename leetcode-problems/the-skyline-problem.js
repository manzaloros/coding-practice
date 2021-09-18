/* eslint-disable prefer-destructuring */
const merge = (leftSkyline, rightSkyline) => {
  const mergedSkyline = [];

  let [leftHeight, rightHeight] = [0, 0];
  let [leftPointer, rightPointer] = [0, 0];

  // while (leftSkyline.length > 0 && rightSkyline.length > 0) {
  while (leftPointer < leftSkyline.length && rightPointer < rightSkyline.length) {
    let [x, h] = [0, 0];

    const leftSkylineX = leftSkyline[leftPointer][0];
    const rightSkylineX = rightSkyline[rightPointer][0];

    const leftSkylineHeight = leftSkyline[leftPointer][1];
    const rightSkylineHeight = rightSkyline[rightPointer][1];
    /*
      If the left skyline is more left than the right skyline, make the new
      x-coord the leftSkyline edge. Update the max to be the left skyline or the
      leftover right skyline max.

      If the skylines have an equal height, make the x coord the left skyline
      and use the taller height for the y coord.
    */
    if (leftSkylineX < rightSkylineX) {
      x = leftSkylineX;
      leftHeight = leftSkylineHeight;
      // leftSkyline.shift();

      leftPointer += 1;
    } else if (leftSkylineX > rightSkylineX) {
      x = rightSkylineX;
      rightHeight = rightSkylineHeight;
      // rightSkyline.shift();

      rightPointer += 1;
    } else {
      x = leftSkylineX;
      leftHeight = leftSkylineHeight;
      rightHeight = rightSkylineHeight;
      // leftSkyline.shift();
      // rightSkyline.shift();

      leftPointer += 1;
      rightPointer += 1;
    }

    h = Math.max(leftHeight, rightHeight);

    const { length } = mergedSkyline;
    const lastElementHeight = mergedSkyline[length - 1][1];

    /*
      Only add coord if heights aren't equal
    */
    if (length === 0 || h !== lastElementHeight) {
      mergedSkyline.push([x, h]);
    }
  }

  // mergedSkyline.push(...leftSkyline);
  // mergedSkyline.push(...rightSkyline);

  /*
    Push the rest of the left over array
  */
  if (leftPointer < leftSkyline.length) {
    mergedSkyline.push(...leftSkyline.slice(leftPointer));
  }

  if (rightPointer < rightSkyline.length) {
    mergedSkyline.push(...rightSkyline.slice(rightPointer));
  }

  return mergedSkyline;
};

const getSkyline = (b, start = 0, end = b.length - 1) => {
  if (b.length === 0) return [];

  /*
    If down to one building, return an array that represents the two points of the
    building's outline. The left most point at the max height of the building, and
    the rightmost point where the building meets the ground
  */
  if (start === end) {
    const buildingOutline = [];

    const leftBound = b[start][0];
    const rightBound = b[end][1];
    const height = b[end][2];

    const leftEdge = [leftBound, height];
    const rightEnd = [rightBound, 0];

    buildingOutline.push(leftEdge);
    buildingOutline.push(rightEnd);

    return buildingOutline;
  }

  const mid = start + Math.floor((end - start) / 2);
  const left = getSkyline(b, start, mid);
  const right = getSkyline(b, mid + 1, end);

  const mergedSkyline = merge(left, right);

  return mergedSkyline;
};

// getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]);
getSkyline([[4, 9, 10], [4, 9, 15], [4, 9, 12], [10, 12, 10], [10, 12, 8]]);
