/**
 * @param {number} n
 * @return {number}
 */
let tribonacci = function (n) {
  const memo = new Map();

  const recurse = (i) => {
    if (i <= 0) return 0;
    if (i <= 2) return 1;

    if (memo.has(i)) return memo.get(i);

    const first = recurse(i - 1);
    const second = recurse(i - 2);
    const third = recurse(i - 3);

    const added = first + second + third;
    memo.set(i, added);

    return added;
  };

  return recurse(n);
};
