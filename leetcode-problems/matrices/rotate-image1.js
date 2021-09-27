/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
  // reverse rows
  let [i, j] = [0, matrix.length - 1];
  while (i < j) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
    i += 1;
    j -= 1;
  }
  // matrix = matrix.reverse();

  const swap = (row, col) => [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];

  // swap row / col for i > 0
  matrix.forEach((row, rowIndex) => {
    matrix.forEach((el, colIndex) => {
      if (colIndex > rowIndex) swap(rowIndex, colIndex);
    });
  });
};

rotate(
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
);
