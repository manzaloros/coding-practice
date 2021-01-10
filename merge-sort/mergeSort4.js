.
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const halfway = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, halfway);
  const rightHalf = arr.slice(halfway);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

const merge = (arr1, arr2, [i, j] = [0, 0]) => {
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j += 1;
    } else {
      merged.push(arr1[i]);
      i += 1;
    }
  }

  const remaining = i < arr1.length ? arr1.slice(i) : arr2.slice(j);

  return merged.concat(remaining);
}
const arr = Array.from(Array(100), () => Math.floor(10 * Math.random()));
console.log(JSON.stringify(mergeSort(arr)) === JSON.stringify(arr.sort((a, b) => a - b)));