// Always check if it will be a valid rectangle, not missing a col or something
let getMaximumGold = function (grid) {
  let max = 0;
  const [rows, cols] = [grid.length, grid[0].length];

  // O(4 => 1)
  const getNeighbors = (row, col) => (
    [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
  ).filter(([nRow, nCol]) => (
    nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0 && grid[nRow][nCol] !== 0
  ));

  const makeKey = (row, col) => `${row}:${col}`;

  // O(rows * cols)
  // Could mark as visited by setting it to a 0
  const dfs = (row, col, gold, seen) => {
    gold += grid[row][col];
    max = Math.max(gold, max);

    const key = makeKey(row, col);
    seen.add(key);

    getNeighbors(row, col).forEach(([nRow, nCol]) => {
      const nKey = makeKey(nRow, nCol);

      if (!seen.has(nKey)) dfs(nRow, nCol, gold, seen);
    });

    seen.delete(key);
  };

  // O((rows * cols) * (rows * cols))
  // Space: O(rows * cols) for set
  grid.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (el !== 0) dfs(rowIndex, colIndex, 0, new Set());
    });
  });

  return max;
};

getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]);
