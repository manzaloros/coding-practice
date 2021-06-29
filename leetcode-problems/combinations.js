/* Given two integers n and k, return all possible combinations of k numbers out
of the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2 Output:
[
  [2,4], [3,4], [2,3], [1,2], [1,3], [1,4],
]
Example 2:

Input: n = 1, k = 1 Output: [[1]]

Constraints:

1 <= n <= 20 1 <= k <= n */

const combine = (n, k,
  // create array from [1, to n inclusive]
  options = Array(n)
    .fill(0)
    .reduce((arr, curr, i) => {
      if (i === 0) return [1];
      return arr.concat([arr[i - 1] + 1]);
    }, [])) => {
  // base case
  // When combo size is 1, just return the options [[op1], [op2]...]
  if (k === 1) return options.map((element) => [element]);

  const combos = [];

  options.forEach((current, index) => {
    // smallerCombos is 2d array, unless length is 0
    const smallerCombos = combine(n, k - 1, options.slice(index + 1));
    // for each SMALLER COMBO. Not each option.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([current].concat(smallerCombo));
    });
  });

  return combos;
};

combine(4, 3);
