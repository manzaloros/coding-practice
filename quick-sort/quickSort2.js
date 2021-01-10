// Average Time complexity: O(n log n) best case. O(n^2) worst case if you are always
// picking the minimum or maximum element. No way to avoid the worst case
const sortPivotAndReturnPivot = (arr, start = 0, end = arr.length) => {
  const pivot = arr[start];
  let swapIndex = start;
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  //arr.forEach((n, i) => {
  //if (pivot > n && i !== 0 && i < end) {
  //swap(arr, ++swapIndex, i);
  //}
  //})
  for (let i = start + 1; i <= end; i += 1) {
    if (pivot > arr[i]) {
      swap(arr, ++swapIndex, i);
    }
  }
  swap(arr, swapIndex, start);
  return swapIndex;
}

const quickSort = function (arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = sortPivotAndReturnPivot(arr, start, end);
    // left
    quickSort(arr, start, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}
const arr = [5, 4, 3, 2, 1];
console.log(quickSort(arr), 'should be [1,2,3,4,5]');