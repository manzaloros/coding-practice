let maximalSquare = function (matrix) {
  let longestLength = 0;
  const [rows, cols] = [matrix.length, matrix[0].length];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = matrix[row][col];

      if (cell === '1') {
        if (row === 0 || col === 0) {
          matrix[row][col] = 1;
        } else {
          const up = +matrix[row - 1][col];
          const left = +matrix[row][col - 1];
          const diagonal = +matrix[row - 1][col - 1];

          matrix[row][col] = Math.min(up, left, diagonal) + 1;
        }
        longestLength = Math.max(longestLength, matrix[row][col]);
      }
    }
  }

  return longestLength ** 2;
};

maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1',
  '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]);
// maximalSquare([['0', '1'], ['1', '0']]);
maximalSquare([['0']]);
