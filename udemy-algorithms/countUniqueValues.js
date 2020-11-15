/* Using multiple pointers!
I: sorted array of numbers
O:  number of unique values in the array
C: TC / SC: O(n), bonus SC: O(n)
E: countUniqueValues([111111,2]) 2
Returns 0 if empty array


*/

const countUniqueValues = (sortedArray, [i, j, { length }] = [0, 1, sortedArray]) => {
  while (j < length) {
    if (sortedArray[i] !== sortedArray[j]) {
      i += 1;
      sortedArray[i] = sortedArray[j];
    }
    j += 1;
  }
  return i === 0 ? 0 : i + 1;
};

// countUniqueValues([1, 1, 1, 1, 1, 2]);
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);