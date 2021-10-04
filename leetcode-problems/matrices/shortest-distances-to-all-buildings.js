/**
 * @param {number[][]} grid
 * @return {number}
 */
let shortestDistance = function (grid) {
  // Make copy of grid
  const distances = grid.map((row) => row.slice());
  const [rows, cols] = [grid.length, grid[0].length];
  let shortest = Infinity;
  let totalHouses = 0;
  let possible = true;

  const isInbounds = ([nRow, nCol]) => (nRow >= 0 && nCol >= 0 && nRow < rows && nCol < cols);
  const isZero = ([nRow, nCol]) => grid[nRow][nCol] === 0;

  const getNeighbors = (row, col) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ]
    .filter(isInbounds)
    .filter(isZero);

  const bfs = (row, col) => {
    // [coord tuple, distance to get there from start]
    const queue = [[[row, col], 0]];
    const seen = new Set();

    while (queue.length > 0) {
      const [[currRow, currCol], distance] = queue.shift();
      const key = `${currRow}:${currCol}`;

      if (!seen.has(key)) {
        seen.add(key);

        distances[currRow][currCol][0] += distance;
        distances[currRow][currCol][1] += 1;

        getNeighbors(currRow, currCol)
          .forEach((neighborCoord) => {
            queue.push([neighborCoord, distance + 1]);
          });
      }
    }
  };

  const iterate = (mat, cb) => {
    mat.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        cb(mat[rowIndex][colIndex], rowIndex, colIndex);
      });
    });
  };

  const updateDistancesGrid = (el, row, col) => {
    if (el === 1 || el === 2) {
      if (el === 1) totalHouses += 1;

      distances[row][col] = Infinity;
    } else {
      // [distance = 0, totalHouses able to reach]
      distances[row][col] = [el, 0];
    }
  };

  const updateMin = (el, row, col) => {
    // if space was able to be reached by all houses, update distance
    if (el[1] === totalHouses) shortest = Math.min(el[0], shortest);
  };

  iterate(distances, updateDistancesGrid);

  // iterate and bfs 1s
  iterate(grid, (el, row, col) => {
    if (el === 1) bfs(row, col);
  });

  // iterate to find min
  iterate(distances, updateMin);

  // return min
  return shortest === Infinity ? -1 : shortest;
};

// shortestDistance([[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]);
// shortestDistance([[1, 0]]);
// shortestDistance([[1]]);
shortestDistance([
  [1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 0]]);
