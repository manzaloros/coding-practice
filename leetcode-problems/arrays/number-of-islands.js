/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and
'0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

Example 1:

Input: grid = [["1","1","1","1","0"], ["1","1","0","1","0"],
  ["1","1","0","0","0"], ["0","0","0","0","0"]
]
Output: 1 Example 2:

Input: grid = [["1","1","0","0","0"], ["1","1","0","0","0"],
  ["0","0","1","0","0"], ["0","0","0","1","1"]
]
Output: 3

Constraints:

m == grid.length n == grid[i].length 1 <= m, n <= 300 grid[i][j] is '0' or '1'.
*/

/* boolean DFS(Node cur, Node target, Set<Node> visited) {
    return true if cur is target;
    for (next : each neighbor of cur) {
        if (next is not in visited) {
            add next to visted;
            return true if DFS(next, target, visited) == true;
        }
    }
    return false;
} */

/*
TC: O(rows x cols)
SC: O(rows x cols) if grid is filled with land and DFS goes rows x cols deep
*/

const numIslands = (grid) => {
  let count = 0;

  const isValid = (row, col) => row >= 0 && row < grid.length && (col > 0 || col < grid[0].length) && (grid[row][col] === '1');

  const dfs = (row, col) => {
    if (isValid(row, col)) {
      grid[row][col] = '0';
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];
    for (let j = 0; j < row.length; j += 1) {
      const tile = row[j];
      if (isValid(i, j)) {
        dfs(i, j);
        count += 1;
      }
    }
  }

  return count;
};

numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]);
