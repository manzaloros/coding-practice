/**
 * @param {number[][]} grid
 * @return {number}

 output: num rep. the number of paths that walk over every non-obstacle exactly once

 count 0 cells
 inst numpaths = 0
 find start row and col (1)

 dfs(row, col, visited = new Set())
 if not in seen
   add node to seen
   if node is ending point (2) and set size is num of empty cells (0)
     add one to num paths
   else if row col is 0
     for each neighbor
       dfs(neighbor, set)
   delete row col from set

 dfs(start row, start col)
 */
/*
  Time: O(3^(rows * cols))
  Space: O(rows * cols) for callstack and set
*/
let uniquePathsIII = function (grid) {
  const [rows, cols] = [grid.length, grid[0].length];
  let [startRow, startCol] = [0, 0];

  const numZeroCells = grid.reduce((count, row, rowIndex) => count + row
    .reduce((rowCount, el, colIndex) => {
      if (el === 1) {
        [startRow, startCol] = [rowIndex, colIndex];
      } else if (el === 0) {
        rowCount += 1;
      }

      return rowCount;
    }, 0),
  0);

  const pathSet = new Set();
  const seen = new Set();
  const inBoundsAndNotObstacle = ([nRow, nCol]) => (
    nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0 && grid[nRow][nCol] !== -1
  );
  const allCellsSeenAndAtEnd = (el) => seen.size - 2 === numZeroCells && el === 2;

  const getNeighbors = (row, col) => (
    [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
  ).filter(inBoundsAndNotObstacle);

  const dfs = (row, col) => {
    const key = `${row}:${col}`;

    if (!seen.has(key)) {
      seen.add(key);
      const el = grid[row][col];

      if (allCellsSeenAndAtEnd(el)) pathSet.add(String(Array.from(seen)));

      getNeighbors(row, col).forEach(([nRow, nCol]) => {
        dfs(nRow, nCol);
      });

      seen.delete(key);
    }
  };

  dfs(startRow, startCol);

  return pathSet.size;
};

// uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]]);
uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]]);
// uniquePathsIII([[0, 1], [2, 0]]);
