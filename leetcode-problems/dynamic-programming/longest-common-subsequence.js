/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// non-memoized TC: O(2^length of shortest string)
// memoized: TC: O(text1 * text2)
// SC: O(text1 * text2) for memo.
let longestCommonSubsequence = (text1, text2) => {
  const memo = new Map();

  const backtrack = (i, j) => {
    if (i === text1.length || j === text2.length) return 0;
    const key = `${i}:${j}`;

    if (memo.has(key)) return memo.get(key);

    let match = 0;
    let winner = 0;

    if (text1[i] === text2[j]) {
      match = 1 + backtrack(i + 1, j + 1);
    } else {
      const checkI = backtrack(i + 1, j);
      const checkJ = backtrack(i, j + 1);

      winner = Math.max(checkI, checkJ);
    }

    const longestSoFar = winner + match;
    memo.set(key, longestSoFar);

    return longestSoFar;
  };

  return backtrack(0, 0);
};
