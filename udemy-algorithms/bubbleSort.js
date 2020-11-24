const bubbleSort = (arr) => {
  const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1]));