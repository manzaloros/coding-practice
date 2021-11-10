// O(n^2) time memoized

// O(n) space call stack, memo
let numTrees = function (n) {
  const memo = new Map();

  const recurse = (lo, hi) => {
    if (lo > hi) return 1;

    const key = `${lo}:${hi}`;
    if (memo.has(key)) return memo.get(key);

    let count = 0;

    const rightTrees = [];
    const leftTrees = [];

    for (let i = lo; i <= hi; i += 1) {
      // rightTrees.push(recurse(i + 1, hi));
      // leftTrees.push(recurse(lo, i - 1));

      // leftTrees.forEach((tree) => {
      //   rightTrees.forEach((rTree) => {
      //     count += 1;
      //   });
      // });
      count += recurse(lo, i - 1) * recurse(i + 1, hi);
    }

    memo.set(key, count);

    return count;
  };

  return recurse(1, n);
};

numTrees(3);
numTrees(1);
