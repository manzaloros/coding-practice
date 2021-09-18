/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (oranges) => {
  const [rows, cols] = [oranges.length, oranges[0].length];

  const iterate = (mat, cb) => {
    mat.forEach((row, rowIndex) => {
      row.forEach((element, colIndex) => {
        cb(element, rowIndex, colIndex);
      });
    });
  };

  let freshCount = 0;
  const rotten = [];

  const addRotten = (element, row, col) => {
    if (element === 2) rotten.push([[row, col], 0]);
    if (element === 1) freshCount += 1;
  };

  iterate(oranges, addRotten);

  // for (let row = rows; row < rows; row += 1) {
  //   for (let col = cols; col < cols; col += 1) {
  //     const current = oranges[row][col];
  //     if (current === 2) rotten.push([[row, col], 0]);
  //   }
  // }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const getNeighbors = (row, col) => {
    // returns [[nrow, ncol]...] of fresh oranges in bounds
    const neighbors = [];

    directions.forEach(([y, x]) => {
      const newRow = row + y;
      const newCol = col + x;

      if ((newRow < rows && newRow >= 0)
        && (newCol < cols && newCol >= 0)
        && (oranges[newRow][newCol] === 1)) {
        neighbors.push([newRow, newCol]);
      }
    });

    return neighbors;
  };

  let minutes = 0;

  // bfs
  const queue = [...rotten];
  const visited = new Set();

  while (queue.length > 0) {
    // time complexity?
    const [[currRow, currCol], currCost] = queue.shift();

    const key = `${currRow}:${currCol}`;
    if (visited.has(key)) continue;

    minutes = Math.max(currCost, minutes);

    // Set as rotten
    if (oranges[currRow][currCol] === 1) {
      oranges[currRow][currCol] = 2;
      freshCount -= 1;
    }
    visited.add(key);

    // only fresh oranges
    const neighbors = getNeighbors(currRow, currCol);

    neighbors.forEach((neighbor) => {
      const [nRow, nCol] = neighbor;
      const newCost = currCost + 1;
      const nKey = `${nRow}:${nCol}`;

      if (!visited.has(nKey)) {
        queue.push([[nRow, nCol], newCost]);
      }
    });
  }

  // let isFreshLeft = false;
  // const findFresh = (current, row, col) => {
  //   if (current === 1) isFreshLeft = true;
  // };

  // iterate(oranges, findFresh);
  // iterate to find any fresh at end
  // for (let row = rows; row < rows; row += 1) {
  //   for (let col = cols; col < cols; col += 1) {
  //     const current = oranges[row][col];
  //     if (current === 1) return -1;
  //   }
  // }

  return freshCount > 0 ? -1 : minutes;
};

// orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]);
// orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]);
// orangesRotting([[0, 2]]);
orangesRotting([[2, 2], [1, 1], [0, 0], [2, 0]]);
