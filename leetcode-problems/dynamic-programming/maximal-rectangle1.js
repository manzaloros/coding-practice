let maximalRectangle = function (matrix) {
  let maxArea = 0;

  const dp = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(0));

  matrix.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (el === '1') {
        // If previous horizontal element was a 1, the max width of a rectangle
        // is the previous max width + 1. This is just for a 1 x something
        // rectangle
        dp[rowIndex][colIndex] = colIndex === 0 ? 1 : dp[rowIndex][colIndex - 1] + 1;

        let width = dp[rowIndex][colIndex];

        // Iterate from current column up (backwards), finding the largest
        // rectangle ending at the current cell. Always choose minimum of
        // current width or new width, since that indicates if you can have a
        // rectangle at all. Keep track and update the global maximum. max area
        // is width * height. Height is the difference between the current
        // cell's row and the row you're counting + 1. So if your current row is
        // 4 and you're looking at the cell on row 2, it is 4 - 2 + 1 (meaning
        // the height there is 3).
        for (let i = rowIndex; i >= 0; i -= 1) {
          width = Math.min(width, dp[i][colIndex]);
          maxArea = Math.max(maxArea, width * (rowIndex - i + 1));
        }
      }
    });
  });

  return maxArea;
};
