/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrderMine = (matrix) => {
  let mBeg = 0;
  let mEnd = matrix[0].length - 1;

  let nBeg = matrix[0].length - 1;
  let nEnd = matrix.length - 1;

  let spiral = [];

  const iterateRow = (leftToRight, start, end) => {
    const row = [];
    const dir = leftToRight ? 1 : -1;

    for (let i = start; i < end; i += dir) {
      row.push(matrix[start][i]);
    }

    return row.length === 0 ? null : row;
  };

  const iterateCol = (upToDown, start, end) => {
    const col = [];
    const dir = upToDown ? 1 : -1;

    for (let i = 0; i < end; i += dir) {
      col.push(matrix[i][start]);
    }

    return col.length === 0 ? null : col;
  };

  while (mBeg <= mEnd && nBeg <= nEnd) {
    const leftToRight = iterateRow(true, mBeg, mEnd);
    if (leftToRight) spiral = spiral.concat(leftToRight);

    const upToDown = iterateCol(true, nBeg, nEnd);
    if (upToDown) spiral = spiral.concat(upToDown);

    const rightToLeft = iterateRow(false, mEnd, mBeg);
    if (rightToLeft) spiral = spiral.concat(rightToLeft);

    const downToUp = iterateCol(false, nEnd, nBeg);
    if (downToUp) spiral = spiral.concat(downToUp);

    mBeg += 1;
    mEnd -= 1;
    nBeg += 1;
    nEnd -= 1;
  }

  return spiral;
};

const spiralOrder = (matrix) => {
  const result = [];

  if (!matrix === matrix.length === 0) return result;

  const [rows, cols] = [matrix.length, matrix[0].length];

  let [up, down] = [0, rows - 1];
  let [left, right] = [0, cols - 1];

  const inBounds = () => result.length < rows * cols;

  // Go "all the way" for rows. Do limit cols to row + 1 and rows - 1
  while (result.length < rows * cols) {
    // left to right. Col changes. Up is row.
    for (let col = left; col <= right && inBounds(); col += 1) {
      result.push(matrix[up][col]);
    }

    // up to down. Row changes. Account for off-by-1 by starting at row + 1.
    for (let row = up + 1; row <= down - 1 && inBounds(); row += 1) {
      result.push(matrix[row][right]);
    }

    // right to left
    for (let col = right; col >= left && inBounds(); col -= 1) {
      result.push(matrix[down][col]);
    }

    // down to up
    for (let row = down - 1; row >= up + 1 && inBounds(); row -= 1) {
      result.push(matrix[row][left]);
    }

    left += 1;
    right -= 1;
    up += 1;
    down -= 1;
  }

  return result;
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
