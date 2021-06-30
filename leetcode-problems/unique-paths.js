/* A robot is located at the top-left corner of a m x n grid (marked 'Start' in
the diagram below).

The robot can only move either down or right at any point in time. The robot is
trying to reach the bottom-right corner of the grid (marked 'Finish' in the
diagram below).

How many possible unique paths are there?

Example 1:

Input: m = 3, n = 7 Output: 28 Example 2:

Input: m = 3, n = 2 Output: 3 Explanation: From the top-left corner, there are a
total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down Example 3:

Input: m = 7, n = 3 Output: 28 Example 4:

Input: m = 3, n = 3 Output: 6

Constraints:

1 <= m, n <= 100 It's guaranteed that the answer will be less than or equal to 2
* 109.
 */
/*
  Without Memo:
  Time: O(2^(rows * cols)) for each possible branch
  Space: O(Max(rows, cols)) for depth of the call stack

  With memo:
  Time: O(rows * cols) because we only calculate each row/col combo once
  Space: O(rows * cols) since we store each calculation from above in the memo
*/
const uniquePaths = (rows, cols) => {
  const memo = {};

  const backtrack = (currRow, currCol) => {
    // base cases
    if (currRow > rows || currCol > cols) {
      return 0;
    }

    if (currRow === rows && currCol === cols) {
      return 1;
    }

    const key = `${currRow}:${currCol}`;
    if (memo.hasOwnProperty(key)) return memo[key];

    // enumerate decisions
    const goDown = backtrack(currRow + 1, currCol);
    const goRight = backtrack(currRow, currCol + 1);

    // return winner
    memo[key] = goDown + goRight;
    return goDown + goRight;
  };

  return backtrack(1, 1);
};

uniquePaths(3, 3);
