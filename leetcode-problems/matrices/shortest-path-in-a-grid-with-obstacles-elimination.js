/* let shortestPath = function (grid, k) {
  const [rows, cols] = [grid.length, grid[0].length];

  const backtrack = (row, col, kLeft, visited) => {
    if (row === rows - 1 && col === cols - 1) return 0;

    if (row > rows - 1 || col > cols - 1 || row < 0 || col < 0) return Infinity;

    if (visited.has(`${row}:${col}`)) return 0;
    visited.add(`${row}:${col}`);
    const cell = grid[row][col];

    if (cell === 1 && kLeft > 0) {
      kLeft -= 1;
    } else if (cell === 1 && kLeft <= 0) return Infinity;

    const goDown = 1 + backtrack(row - 1, col, kLeft, visited);
    const goLeft = 1 + backtrack(row, col - 1, kLeft, visited);
    const goRight = 1 + backtrack(row, col + 1, kLeft, visited);
    const goUp = 1 + backtrack(row - 1, col, kLeft, visited);

    const shortestDistance = Math.min(goDown, goLeft, goRight, goUp);

    if (shortestDistance === Infinity) return -1;

    return shortestDistance;
  };

  return backtrack(0, 0, k, new Set());
}; */

// O(n * k) since you have to store state of cell with different k values
const shortestPathBFS = (grid, k) => {
  const [rows, cols] = [grid.length, grid[0].length];

  const queue = [
    [[0, 0], k, 0],
  ];
  const seen = new Set();
  let shortestDistance = Infinity;
  const isInBounds = ([nRow, nCol]) => (nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0);

  const getNeighbors = (row, col, kLeft) => (
    [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
      .filter(isInBounds)
      .filter(([nRow, nCol]) => {
        if (kLeft <= 0) {
          return grid[nRow][nCol] === 0;
        }

        return true;
      })
  );

  while (queue.length > 0) {
    let [[currRow, currCol], kLeft, currDistance] = queue.shift();
    const currCell = grid[currRow][currCol];

    const key = `${currRow}:${currCol}:${kLeft}`;

    if (currRow === rows - 1 && currCol === cols - 1) {
      shortestDistance = Math.min(currDistance, shortestDistance);
    } else if (!seen.has(key)) {
      seen.add(key);

      if (currCell === 1 && kLeft > 0) kLeft -= 1;

      // Only return in-bounds and valid neighbors dependent on kLeft
      getNeighbors(currRow, currCol, kLeft).forEach(([nRow, nCol]) => {
        queue.push([[nRow, nCol], kLeft, currDistance + 1]);
      });
    }
  }

  return shortestDistance === Infinity ? -1 : shortestDistance;
};

shortestPathBFS([[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1);

// shortestPathBFS([[0, 1, 1], [1, 1, 1], [1, 0, 0]], 1);
// shortestPathBFS([
//   [0, 0],
//   [1, 0],
//   [1, 0],
//   [1, 0],
//   [1, 0],
//   [1, 0],
//   [0, 0],
//   [0, 1],
//   [0, 1],
//   [0, 1],
//   [0, 0],
//   [1, 0],
//   [1, 0],
//   [0, 0],
// ], 4);
