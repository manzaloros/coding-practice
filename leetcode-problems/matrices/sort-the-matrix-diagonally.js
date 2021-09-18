/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// O rows * (min(rows, cols) * log (min(rows, cols)))
// Space min(rows, cols) used by array with diagonal elements
let diagonalSort = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  const sortDiagonal = (row, col) => {
  // Max diagonal length is min of rows or cols
    const diagonalLength = Math.min(rows - row, cols - col);

    const diagonal = [];
    // Adding 1 to current coords to get major diagonal
    for (let i = 0; i < diagonalLength; i += 1) diagonal.push(mat[row + i][col + i]);

    // O diagonal length * log (dL)
    diagonal.sort((a, b) => (a < b ? -1 : 1));

    // Starts back from 0 so you don't need to go backwards
    for (let i = 0; i < diagonalLength; i += 1) mat[row + i][col + i] = diagonal[i];
  };

  // Sort first half diagonals. Always passing in col 0
  // O rows * (min(rows, cols) * log (min(rows, cols)))
  for (let row = 0; row < rows; row += 1) sortDiagonal(row, 0);

  // Sort second half diagonals. Always passing in row 0
  for (let col = 1; col < cols; col += 1) sortDiagonal(0, col);

  return mat;
};

const diagonalSortWithCountingSort = (mat) => {
  const rows = mat.length;
  const cols = mat[0].length;

  /*
    Counting sort can be used as a smaller part of radix sort.

    Use counting sort when the range of elements (like 1 to 100) is smaller than
    the NUMBER of elements you will get, like the size of the matrix, here.

    Runs in linear time
  */
  const countingSort = (nums) => {
    let [min, max] = [1, 100];

    let length = max - min + 1;

    // buckets
    const count = Array(length).fill(0);

    nums.forEach((num) => { count[num - min] += 1; });

    const sorted = [];

    for (let i = 0; i < length; i += 1) {
      for (let times = count[i]; times > 0; times -= 1) {
        sorted.push(i + min);
      }
    }

    return sorted;
  };

  const sortDiagonal = (row, col) => {
  // Max diagonal length is min of rows or cols
    const diagonalLength = Math.min(rows - row, cols - col);

    let diagonal = [];
    // Adding 1 to current coords to get major diagonal
    for (let i = 0; i < diagonalLength; i += 1) diagonal.push(mat[row + i][col + i]);

    // O diagonal length * log (dL)
    diagonal = countingSort(diagonal);

    // Starts back from 0 so you don't need to go backwards
    for (let i = 0; i < diagonalLength; i += 1) mat[row + i][col + i] = diagonal[i];
  };

  // Sort first half diagonals. Always passing in col 0
  // O rows * (min(rows, cols) * log (min(rows, cols)))
  for (let row = 0; row < rows; row += 1) sortDiagonal(row, 0);

  // Sort second half diagonals. Always passing in row 0
  for (let col = 1; col < cols; col += 1) sortDiagonal(0, col);

  return mat;
};
