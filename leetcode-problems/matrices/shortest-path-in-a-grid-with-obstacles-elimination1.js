let shortestPath = function (grid, k) {
  const [rows, cols] = [grid.length, grid[0].length];
  let minSteps = Infinity;
  const makeKey = (row, col, kLeft) => `${row}:${col}:${kLeft}`;

  const getNeighbors = (row, col) => (
    [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
  ).filter(([nRow, nCol]) => (
    nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0
  ));

  const seen = new Set();
  const queue = [[0, 0, k, 0]];

  while (queue.length > 0) {
    let [row, col, kLeft, steps] = queue.shift();
    const cell = grid[row][col];

    if (cell === 1) {
      if (kLeft > 0) {
        kLeft -= 1;
      } else continue;
    }

    if (row === rows - 1 && col === cols - 1) {
      minSteps = Math.min(minSteps, steps);
      continue;
    }

    const key = makeKey(row, col, kLeft);

    seen.add(key);

    getNeighbors(row, col).forEach(([nRow, nCol]) => {
      const nKey = makeKey(nRow, nCol, kLeft);

      if (!seen.has(nKey)) queue.push([nRow, nCol, kLeft, steps + 1]);
    });
  }

  return minSteps === Infinity ? -1 : minSteps;
};

shortestPath(
  [[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1,
);
