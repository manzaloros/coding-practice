/*
I: Array of nums representing a histogram
O: Num representing area of largest rectangle
C: No time or space complexity
E: empty  y? No non-negatives

 */

const largestRectangleInHistogram = (arr, { length } = arr, largestArea = 0) => {
  for (let i = 0; i < length; i += 1) {
    let currentArea = 0;
    let previousMinHeight = arr[i];
    for (let j = i; j < length; j += 1) {
      const currentHeight = arr[j]
      previousMinHeight = Math.min(previousMinHeight, currentHeight);
      currentArea = ((j - i) + 1) * previousMinHeight;
      largestArea = Math.max(currentArea, largestArea);
    }
  }
  return largestArea;
}

console.log(largestRectangleInHistogram([2, 1, 5, 6, 2, 3]), "should be 10")