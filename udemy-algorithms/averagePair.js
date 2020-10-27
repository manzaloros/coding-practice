const averagePair = (arr, target) => {
  let [i, j] = [0, arr.length];
  while (i < j) {
    while (i < j) {
      if (((arr[i] + arr[j]) / 2) === target) return true;
      j -= 1;
    }
    j = arr.length;
    i += 1;
  }
  return false;
}

// console.log(averagePair([], 4))
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))