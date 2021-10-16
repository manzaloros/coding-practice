/* You are given two arrays of integers a and b, and two integers lower and
upper.  Your task is to find the number of pairs (i, j) such that lower ≤ a[i] *
a[i] + b[j] * b[j] ≤ upper.  Example: For a = [3, -1, 9], b = [100, 5, -2],
lower = 7, and upper = 99, the output should be boundedSquareSum(a, b, lower,
upper) = 4.  There are only four pairs that satisfy the requirement: If i = 0
and j = 1, then a[0] = 3, b[1] = 5, and 7 ≤ 3 * 3 + 5 * 5 = 9 + 25 = 36 ≤ 99.
If i = 0 and j = 2, then a[0] = 3, b[2] = -2, and 7 ≤ 3 * 3 + (-2) * (-2) = 9 +
4 = 13 ≤ 99.  If i = 1 and j = 1, then a[1] = -1, b[1] = 5, and 7 ≤ (-1) * (-1)
+ 5 * 5 = 1 + 25 = 26 ≤ 99.  If i = 2 and j = 2, then a[2] = 9, b[2] = -2, and 7
≤ 9 * 9 + (-2) * (-2) = 81 + 4 = 85 ≤ 99.  For a = [1, 2, 3, -1, -2, -3], b =
[10], lower = 0, and upper = 100, the output should be boundedSquareSum(a, b,
lower, upper) = 0.  Since the array b contains only one element 10 and the array
a does not contain 0, it is not possible to satisfy 0 ≤ a[i] * a[i] + 10 * 10 ≤
100. */
/*
  Return the NUMBER of pairs that:
  Find pairs so that:
  lower <= a[i] * a[i] + b[j] * b[j] <= upper
*/

const boundedSquareSum = (a, b, lower, upper) => {
  a = a.map((num) => num * num);
  b = b.map((num) => num * num);

  a.sort((num1, num2) => (num1 < num2 ? -1 : 1));
  b.sort((num1, num2) => (num1 < num2 ? -1 : 1));

  let count = 0;

  for (let i = 0; i < a.length; i += 1) {
    const aNum = a[i];

    for (let j = 0; j < b.length; j += 1) {
      const bNum = b[j];

      if (bNum > upper || aNum + bNum > upper) break;

      if (aNum + bNum > lower) count += 1;
    }
  }

  return count;
};

// Binary search not quite right
/* const boundedSquareSum = (a, b, lower, upper) => {
  if (a.length > b.length) return boundedSquareSum(b, a, lower, upper);

  a = a.map((num) => num * num);

  a.sort((num1, num2) => (num1 < num2 ? -1 : 1));

  const binarySearch = (target) => {
    let [lo, hi] = [0, a.length - 1];

    while (lo + 1 < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      const midNum = a[mid];

      if (midNum === target) return mid;

      if (midNum < target) {
        lo = mid;
      } else {
        hi = mid;
      }
    }

    return lo;
  };

  const countPairs = (count, num) => {
    const square = num * num;

    // Don't even search if not less than upper. Find the number of a nums that
    // is less than (upper limit - a num)
    if (square < upper) {
      const rightBound = binarySearch(upper - square);
      count += rightBound;
    }

    return count;
  };

  return b.reduce(countPairs, 0);
}; */

boundedSquareSum([3, -1, 9], [100, 5, -2], 7, 99); // 4
