/**
 * @param {number} n
 * @return {number}
 */
/*
  no memo:
  Time: O(2^n)
  Space: O(n) for call stack

  memo:
  Time: O(n)
  Space: O(n) for call stack
*/
let climbStairs = function (n) {
  const memo = new Map();

  const backtrack = (stepsLeft) => {
    if (stepsLeft === 0) return 1;
    if (stepsLeft < 0) return 0;

    if (memo.has(stepsLeft)) return memo.get(stepsLeft);

    const goOne = backtrack(stepsLeft - 1);
    const goTwo = backtrack(stepsLeft - 2);

    const numWays = goOne + goTwo;

    memo.set(stepsLeft, numWays);

    return numWays;
  };

  return backtrack(n);
};
