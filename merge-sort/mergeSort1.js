const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const halfway = Math.floor(nums.length / 2);
  const half1 = nums.slice(0, halfway);
  const half2 = nums.slice(halfway, nums.length);

  return merge(mergeSort(half1), mergeSort(half2));
}


const merge = (left, right) => {
  let [i, j] = [0, 0];

  const sorted = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i++]);
    } else {
      sorted.push(right[j++]);
    }
  }

  const remaining = i === left.length ? right.slice(j) : left.slice(i);
  return sorted.concat(remaining);
}


// Maybe use Node.js built in assertion functions here:
const assertArraysEqual = (actual, expected) => {
  if (!Array.isArray(actual) || !Array.isArray(expected)) return console.log(`invalid input`);
  if (actual.length !== expected.length) return console.log(`Non-matching lengths`);
  let areEqual = true;

  actual.forEach((n, i) => {
    if (n !== expected[i]) {
      areEqual = false;
    }
  })

  return console.log(`${areEqual}. Expected [${expected}]${areEqual ? ' and' : ', but'} got [${actual}]`);
}


const array = [5, 4, 3, 2, 1];
assertArraysEqual(mergeSort(array), array.sort((a, b) => a - b));
