/* Making A Large Island
You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 500
grid[i][j] is either 0 or 1. */

const largestIsland = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const parents = Array(rows * cols).fill(0).map((val, i) => i);
  const size = Array(rows * cols).fill(1);

  const find = (child) => {
    if (parents[child] !== child) parents[child] = find(parents[child]);

    return parents[child];
  };

  const union = (key1, key2) => {
    const parent1 = find(key1);
    const parent2 = find(key2);

    if (parent1 !== parent2) {
      // union the parents
      parents[parent1] = parent2;
      // add the size of the current component to the new parent
      size[parent2] += size[parent1];
    }
  };

  const isValid = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

  const directionX = [0, 1, -1, 0];
  const directionY = [1, 0, 0, -1];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1) {
        const key = row * cols + col;

        for (let direction = 0; direction < 4; direction += 1) {
          const nextRow = row + directionX[direction];
          const nextCol = col + directionY[direction];
          const nextKey = nextRow * cols + nextCol;

          if (isValid(nextRow, nextCol) && grid[nextRow][nextCol] === 1) {
            union(key, nextKey);
          }
        }
      }
    }
  }

  let maxIslandSize = 0;

  for (let i = 0; i < size.length; i += 1) maxIslandSize = Math.max(maxIslandSize, size[i]);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 0) {
        const key = row * cols + col;
        const prevParent = new Set();
        let combinedSize = 1;

        // Check all 4 directions
        for (let direction = 0; direction < 4; direction += 1) {
          const nextRow = row + directionX[direction];
          const nextCol = col + directionY[direction];
          const nextKey = nextRow * cols + nextCol;

          if (isValid(nextRow, nextCol) && grid[nextRow][nextCol] === 1) {
            // if the neighbor is a valid space and it's an island, find its
            // parent if it were an island
            const currentParent = find(nextKey);

            if (prevParent.size === 0 || !prevParent.has(currentParent)) {
              // If the prevParent set doesn't have the current parent, add the
              // current parent's size to the combined size and add the current
              // parent to the set so you know if you try to check this current
              // parent again (and you won't add it's size twice)
              combinedSize += size[currentParent];
              prevParent.add(currentParent);
            }
          }
        }

        maxIslandSize = Math.max(maxIslandSize, combinedSize);
      }
    }
  }

  // Return whole size of grid if all 1s and 0s or max.
  return maxIslandSize === 0 ? rows * cols : maxIslandSize;
};

largestIsland([[1, 0], [0, 1]]);
