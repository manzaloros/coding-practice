/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// O(rows * cols)
const rotate = (matrix) => {
  // Reverse matrix rows
  matrix.reverse();

  // Can also swap the rows so its done in place. EDIT: just kidding. '.reverse()' is in place, already.:
  // matrix.forEach((row, index) => {
  //   const swapIndex = matrix.length - index - 1;
  //   if (index < swapIndex) [matrix[index], matrix[swapIndex]] = [matrix[swapIndex], matrix[index]]
  // })

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
