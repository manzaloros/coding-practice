/**
 * @param {number[]} nums
 * @return {number}
 */
/* let lengthOfLIS = function (nums) {
  const memo = new Map();

  const backtrack = (index, maxSoFar) => {
    if (index >= nums.length) return 0;

    const key = `${index}:${maxSoFar}`;
    if (memo.has(key)) return memo.get(key);

    let choose = -Infinity;

    const current = nums[index];
    if (current > maxSoFar) choose = 1 + backtrack(index + 1, current);

    let notChoose = backtrack(index + 1, maxSoFar);

    const winner = Math.max(choose, notChoose);
    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, -Infinity);
}; */

// tried using a 2d array, didn't work either.
let lengthOfLIS = function (nums) {
  const memo = Array(nums.length).fill(0).map(() => Array(nums.length));

  const backtrack = (index, maxSoFar) => {
    if (index >= nums.length) return 0;

    if (memo[index][maxSoFar]) return memo[index][maxSoFar];

    let choose = 0;

    const current = nums[index];
    if (current > maxSoFar) choose = 1 + backtrack(index + 1, current);

    let notChoose = backtrack(index + 1, maxSoFar);

    const winner = Math.max(choose, notChoose);
    memo[index][maxSoFar] = winner;

    return winner;
  };

  return backtrack(0, -Infinity);
};

const lengthOfLISBinarySearch = (nums) => {
  const binarySearch = (arr, num) => {
    let [left, right] = [0, arr.length - 1];

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);

      if (arr[mid] === num) return mid;

      if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };

  // Start the subarray you're building with the first element
  const sub = [nums[0]];

  // The important thing about this problem is that the subsequence you're
  // building isn't actually in order, but it DOES REPRESENT the longest
  // increasing subsequence. The reason you know it's going to be in order
  // compared to the original array is because you iterate the numbers in order.

  // You do end up with some elements out of order, but the last element of your
  // subarray should always be strictly increasing
  nums.forEach((num, i) => {
    if (i > 0) {
      // if you can add a number (it's strictly increasing), add it
      if (num > sub[sub.length - 1]) {
        sub.push(num);
      } else {
        // otherwise, search for the smallest element in the subsequence that is
        // greater than or equal to the current num
        let j = binarySearch(sub, num);
        sub[j] = num;
      }
    }
  });

  return sub.length;
};

lengthOfLISBinarySearch([5, 7, -24, 12, 13, 2, 3, 12, 5, 6, 35]);
