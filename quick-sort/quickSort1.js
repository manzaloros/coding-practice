const pivotHelper = function (arr, [start, end] = [0, arr.length - 1]) {
  let pivotIndex = start;
  const pivot = arr[start];
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  for (let i = start + 1; i < arr.length; i += 1) {
    if (pivot > arr[i]) {
      // swap
      swap(arr, i, ++pivotIndex);
      console.log(JSON.stringify(arr));
    }
  }
  // swap starting element (the pivot) with the pivot index
  swap(arr, start, pivotIndex);

  return pivotIndex;
}

const array = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(pivotHelper(array), "should be 4")
console.log(array);