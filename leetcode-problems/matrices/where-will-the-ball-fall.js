/**
 * @param {number[][]} grid
 * @return {number[]}
 
 [1, -1, -1, -1, -1]
 
 make graph from input
 do DFS from each starting node to each ending node
 return answer arr
 
 */
// time: O(rows * cols)
// space: O(1)
var findBall = function(grid) {
  const result = [];
  const firstRow = grid[0]
  
  return firstRow.reduce((result, col, colIndex) => {
    let currRow = 0;
    let currCol = colIndex;
    
    while (currRow < grid.length) {
      const cell = grid[currRow][currCol];
      // go left if next space is in bounds and there isn't a right wall in the next cellS
      if (cell === 1 && currCol + 1 < firstRow.length && grid[currRow][currCol + 1] === 1) {
        currCol += 1;
        currRow += 1;
      // go right if next space is in bounds and there isn't a left wall in the next cellS
      } else if (cell === -1 && currCol - 1 >= 0 && grid[currRow][currCol - 1] === -1) {
        currCol -= 1;
        currRow += 1;
      // stop the ball if you hit a wall
      } else break;    
    }
    // if the ball got to the end of the board, set it to the currCol
    result[colIndex] = currRow === grid.length ? currCol : -1;
    
    return result;
  },[])
};
