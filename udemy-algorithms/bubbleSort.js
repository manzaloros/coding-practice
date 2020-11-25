/* Usually O(n^2). If data is almost sorted, could be O(n) with noSwaps */
const bubbleSort = (arr, noSwaps = true) => {
  /* ES5 syntax: */
  const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];
  /* Loop from END of array backwards */
  for (let i = arr.length; i > 0; i -= 1) {
    /* Stopping at i+1 will leave the sorted values at the end untouched */
    for (let j = 0; j < (i - 1); j += 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, (j + 1))
      } else {
        /* If we didn't swap any numbers, array is totally sorted, so short-circuit */
        !noSwaps;
        break;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([5, 1, 2, 3, 4]));