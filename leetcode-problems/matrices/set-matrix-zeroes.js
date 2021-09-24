/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function (matrix) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  let isFirstColZero = false;

  const iterate = (cb) => {
    matrix.forEach((row, rowIndex) => {
      row.forEach((element, colIndex) => {
        cb(element, rowIndex, colIndex);
      });
    });
  };

  const addMarkers = (num, row, col) => {
    if (col === 0 && num === 0) isFirstColZero = true;

    // If curr num is 0, make first element of same col a 0. Also make first
    // element of same col a 0. Do this for all rows except first (0th) row.
    if (col >= 1) {
      if (num === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  };

  // If first element of current row or the first element of the current col is
  // a 0, make that element a 0.
  const updateElements = (num, row, col) => {
    if (row >= 1 && col >= 1) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) matrix[row][col] = 0;
    }
  };

  const updateFirstRow = (num, row, col) => {
    if (row === 0) matrix[row][col] = 0;
  };

  const updateFirstCol = (num, row, col) => {
    if (col === 0) matrix[row][col] = 0;
  };

  iterate(addMarkers);

  iterate(updateElements);

  if (matrix[0][0] === 0) {
    iterate(updateFirstRow);
  }

  if (isFirstColZero) {
    iterate(updateFirstCol);
  }

  return matrix;
};

// setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
// setZeroes(
//   [[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]],
// );
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
