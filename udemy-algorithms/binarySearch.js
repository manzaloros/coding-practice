/* Recursive */
const binarySearchRecursive = function (arr, val, [left, right, mid] = [0, arr.length - 1, 0]) {
  if (left > right) return -1;

  mid = Math.floor((right - left) / 2) + left;
  const guess = arr[mid];

  if (val === guess) return mid;
  if (val > guess) return binarySearchRecursive(arr, val, [mid + 1, right, mid]);
  if (val < guess) return binarySearchRecursive(arr, val, [left, mid - 1, mid]);
};

/* Iterative */
const binarySearch = function (arr, val, [left, right, mid] = [0, arr.length, 0]) {
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left;
    const guess = arr[mid];
    if (val === guess) return mid;
    if (val > guess) {
      left = mid + 1;
    } else if (val < guess) {
      right = mid - 1;
    }
  }
  return -1;
}

const num = 1;
const array = [1, 2, 3, 4, 5];

console.log(binarySearch(array, num) === array.indexOf(num));