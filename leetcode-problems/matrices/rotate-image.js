/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// O(rows * cols)
let rotate = function (matrix) {
  // Reverse matrix rows
  matrix = matrix.reverse();

  const swap = (i, j) => {
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  };

  // If col > row, swap the row and col indexes
  matrix.forEach((row, rowIndex) => {
    row.forEach((element, colIndex) => {
      if (colIndex > rowIndex) swap(rowIndex, colIndex);
    });
  });
};

rotate([[1, 2], [3, 4]]);
