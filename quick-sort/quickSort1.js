const pivotHelper = function (arr, start = 0, end = arr.length + 1) {
  let pivotIndex = start;
  const pivot = arr[start];
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  for (let i = start + 1; i <= end; i += 1) {
    if (pivot > arr[i]) {
      // swap
      swap(arr, i, ++pivotIndex);
      //console.log(JSON.stringify(arr));
    }
  }
  // swap starting element (the pivot) with the pivot index
  swap(arr, start, pivotIndex);

  return pivotIndex;
}

const quickSort = function (arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const updatedPivotIndex = pivotHelper(arr, start, end);
    // quick sort left side
    quickSort(arr, start, updatedPivotIndex - 1);
    // quicksort right side
    quickSort(arr, updatedPivotIndex + 1, end)
  }
  return arr;
}

const array = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(array), "should be [1,2,3,4,5,6,7,8");
