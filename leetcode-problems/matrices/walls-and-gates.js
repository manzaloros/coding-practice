/*
  From each gate, fill in the distances in the empty rooms

  Time: O(rows * cols) *

*/
const wallsAndGates = (rooms) => {
  const [rows, cols] = [rooms.length, rooms[0].length];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const isInBounds = (row, col) => ((row < rows && row >= 0) && (col < cols && col >= 0));

  const isEmpty = (row, col) => {
    const cell = rooms[row][col];

    return cell !== 0 && cell !== -1;
  };

  // O(1) because only 4 directions
  const getNeighbors = (row, col) => {
    const neighbors = [];

    directions.forEach(([y, x]) => {
      const newRow = row + y;
      const newCol = col + x;

      if (isInBounds(newRow, newCol) && isEmpty(newRow, newCol)) {
        neighbors.push([newRow, newCol]);
      }
    });

    return neighbors;
  };

  const bfs = (row, col) => {
    const queue = [[[row, col], 0]];
    const visited = new Set();

    while (queue.length > 0) {
      const [[currRow, currCol], cost] = queue.shift();
      const key = `${currRow}:${currCol}`;
      if (visited.has(key)) continue;

      visited.add(key);

      if (isEmpty(currRow, currCol)) {
        rooms[currRow][currCol] = Math.min(rooms[currRow][currCol], cost);
      }

      const neighbors = getNeighbors(currRow, currCol);

      neighbors.forEach(([nRow, nCol]) => {
        const newCost = cost + 1;
        const nKey = `${nRow}:${nCol}`;

        if (!visited.has(nKey)) {
          queue.push([[nRow, nCol], newCost]);
        }
      });
    }
  };

  // O(rows * cols)
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = rooms[row][col];

      if (cell === 0) bfs(row, col);
    }
  }

  return rooms;
};

wallsAndGates(
  [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]],
);
