/* There is an m x n rectangular island that borders both the Pacific Ocean and
Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and
the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n
integer matrix heights where heights[r][c] represents the height above sea level
of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring
cells directly north, south, east, and west if the neighboring cell's height is
less than or equal to the current cell's height. Water can flow from any cell
adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes
that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic
oceans.

Example 1:

Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]] Example 2:

Input: heights = [[2,1],[1,2]] Output: [[0,0],[0,1],[1,0],[1,1]]

Constraints:

m == heights.length n == heights[r].length 1 <= m, n <= 200 0 <= heights[r][c]
<= 105 */

/*
  Rain flows up down left right if their height is <= current cell. Also can
  flow into ocean from adjacent cell.

  input: matrix rep. heights
  output: 2d list, [[0, 1]] means that row 0, col 1 flows to BOTH! of the
  oceans eventually.

  BFS or DFS from each cell. If neighbor is <= current cell, search them. Have
  to be able to reach 0th row OR 0th column AND highest row OR highest column.

  Cells are only neighbors if they fit the condition.
*/

const pacificAtlantic = (heights) => {
  // init rows and cols
  const rows = heights.length;
  const cols = heights[0].length;

  // make atlantic and pacific queues
  const atlanticQueue = [];
  const pacificQueue = [];

  // make adjacent coords array. [down, up, right, left]
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const bfs = (queue) => {
    // Make a matrix to track visited and reachable
    // false means we haven't visited the cell OR it isn't reachable
    const reachable = Array(rows).fill(false).map((row) => Array(cols).fill(false));

    while (queue.length > 0) {
      const current = queue.shift();

      reachable[current[0]][current[1]] = true;

      directions.forEach((direction) => {
        const newRow = current[0] + direction[0]; // i.e. 0 + 0 or 0 + -1
        const newCol = current[1] + direction[1];

        // if the adjacent row is in bounds
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          // if we haven't seen the adjacent cell yet
          if (!reachable[newRow][newCol]) {
            // if the adjacent cell matches our criteria
            if (heights[newRow][newCol] >= heights[current[0]][current[1]]) {
              // add the adjacent cell to the queue so we can process it as
              // visited AND as a cell that can flow water into the ocean
              queue.push([newRow, newCol]);
            }
          }
        }
      });
    }

    return reachable;
  };

  // get all cells that are adjacenst to each ocean
  // Adds coords of adjacent cells NOT heights
  // Start at the oceans, so we can search inward
  for (let row = 0; row < rows; row += 1) {
    // Add left side to pacific
    pacificQueue.push([row, 0]);
    // Add right side to atlantic
    atlanticQueue.push([row, cols - 1]);
  }

  for (let col = 0; col < cols; col += 1) {
    // add north side to pacific
    pacificQueue.push([0, col]);
    // add south side to atlantic
    atlanticQueue.push([rows - 1, col]);
  }

  // bfs from each ocean
  const pacificReachable = bfs(pacificQueue);
  const atlanticReachable = bfs(atlanticQueue);

  // find all cells that flow into both oceans
  const commonCells = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (pacificReachable[row][col] && atlanticReachable[row][col]) {
        commonCells.push([row, col]);
      }
    }
  }

  return commonCells;
};

pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]);
