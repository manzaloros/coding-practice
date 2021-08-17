/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Turns out you don't need the memo...
// Time: O(log n). n is reduced by half each time.
// Space: O(log n ) callstack

const recurse = (num, pow) => {
  if (pow === 0) return 1;
  if (pow === 1) return num;

  if (pow % 2 === 0) {
    const half = recurse(num, pow / 2);

    return half * half;
  }

  const half = recurse(num, (pow - 1) / 2);

  return (half * half) * num;
};

let myPow = function (x, n) {
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return recurse(x, n);
};

// myPow(0.00001, 2147483647);
myPow(2, -2);
