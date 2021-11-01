/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalRectangle = function (matrix) {
  let maxArea = 0;

  const dp = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(0));

  matrix.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (el === '1') {
        dp[rowIndex][colIndex] = colIndex === 0 ? 1 : dp[rowIndex][colIndex - 1] + 1;

        let width = dp[rowIndex][colIndex];

        for (let i = rowIndex; i >= 0; i -= 1) {
          width = Math.min(width, dp[i][colIndex]);
          maxArea = Math.max(maxArea, width * (rowIndex - i + 1));
        }
      }
    });
  });

  return maxArea;
};

maximalRectangle([['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]);
