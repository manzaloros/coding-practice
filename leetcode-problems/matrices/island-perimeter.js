/**
 * @param {number[][]} grid
 * @return {number}
 */
let islandPerimeter = function (grid) {
  let total = 0;
  let [rows, cols] = [grid.length, grid[0].length];

  const isInboundsAndLand = ([nRow, nCol]) => (
    (nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0)
      && grid[nRow][nCol] === 1);

  const countBorderingOnes = (row, col) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ].filter(isInboundsAndLand).length;

  const countPerimeter = (el, row, col) => {
    if (el === 1) total += (4 - countBorderingOnes(row, col));
  };

  const iterate = (cb) => {
    grid.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        cb(el, rowIndex, colIndex);
      });
    });
  };

  iterate(countPerimeter);

  return total;
};

islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
