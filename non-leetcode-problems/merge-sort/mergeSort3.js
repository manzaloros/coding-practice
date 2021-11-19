const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const halfway = Math.floor(arr.length / 2);

  const half1 = arr.slice(0, halfway);
  const half2 = arr.slice(halfway);

  return merge(mergeSort(half1), mergeSort(half2));
}

const merge = (arr1, arr2, [i, j] = [0, 0]) => {
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }
  const remaining = i < arr1.length ? arr1.slice(i) : arr2.slice(j);
  return merged.concat(remaining);
}

console.log("should be [1,2,3,4]", merge([1, 4], [2, 3]))
console.log("should be [1,2,3,4,5]", mergeSort([5, 1, 3, 2, 4]));