/* Find minimum of compared values and place that in the correct place.
Going through and selecting the smallest value and placing it at the beginning.

Store first element as smallest value so far
Compare element to the next item until you find smallest nubmer
You are not saving value, you are saving index so you can swap
If the minimum is not the index you began with, swap the two values
Repeat with next element

This algo comes down to saving the index, not the element.

Builds array from the beginning up. Minimum values get sorted first.

Swaps the minimum element index and current i at the end of inner loop.

O(n^2) worst-case time complexity. Could be better than bubble-sort
if you are worried about memory, because you only swap if needed.
*/

const selectionSort = (arr, { length } = arr) => {
  const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

  for (let i = 0; i < length; i += 1) {
    let minimumIndex = i;
    for (let j = i + 1; j < length; j += 1) {
      if (arr[minimumIndex] > arr[j]) minimumIndex = j;
    }
    if (minimumIndex !== i) swap(arr, minimumIndex, i);
  }
  return arr;
};

console.log(selectionSort([5, 4, 3, 2, 1]));