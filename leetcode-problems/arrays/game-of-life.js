/* According to Wikipedia's article: "The Game of Life, also known simply as
Life, is a cellular automaton devised by the British mathematician John Horton
Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial
state: live (represented by a 1) or dead (represented by a 0). Each cell
interacts with its eight neighbors (horizontal, vertical, diagonal) using the
following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by
under-population.  Any live cell with two or three live neighbors lives on to
the next generation.  Any live cell with more than three live neighbors dies, as
if by over-population.  Any dead cell with exactly three live neighbors becomes
a live cell, as if by reproduction.  The next state is created by applying the
above rules simultaneously to every cell in the current state, where births and
deaths occur simultaneously. Given the current state of the m x n grid board,
return the next state.

Example 1:

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]] Output:
[[0,0,0],[1,0,1],[0,1,1],[0,1,0]] Example 2:

Input: board = [[1,1],[1,0]] Output: [[1,1],[1,1]]

Constraints:

m == board.length n == board[i].length 1 <= m, n <= 25 board[i][j] is 0 or 1.

Follow up:

Could you solve it in-place? Remember that the board needs to be updated
simultaneously: You cannot update some cells first and then use their updated
values to update other cells.  In this question, we represent the board using a
2D array. In principle, the board is infinite, which would cause problems when
the active area encroaches upon the border of the array (i.e., live cells reach
the border). How would you address these problems?
 */

const gameOfLife = (board) => {
  // You have to do this to copy the inner arrays
  const boardCopy = JSON.parse(JSON.stringify(board));

  // Represents previous/current/next rows/cols
  const neighbors = [-1, 0, 1];

  const rows = board.length;
  const cols = board[0].length;

  const checkNeighbors = (selfRow, selfCol) => {
    let liveNeighbors = 0;

    // Iterate over neighbors
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        // [0,0] will be self and isn't a neighbor
        if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
          const neighborRow = (selfRow + neighbors[i]);
          const neighborCol = (selfCol + neighbors[j]);

          // Check if in bounds and if it's a neighbor
          if ((neighborRow < rows && neighborRow >= 0) && (neighborCol < cols && neighborCol >= 0)
            && boardCopy[neighborRow][neighborCol] === 1) {
            liveNeighbors += 1;
          }
        }
      }
    }

    return liveNeighbors;
  };

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < cols; column += 1) {
      const numberOfLiveNeighbors = checkNeighbors(row, column);

      if ((boardCopy[row][column] === 1)
        && (numberOfLiveNeighbors < 2 || numberOfLiveNeighbors > 3)) board[row][column] = 0;

      if (boardCopy[row][column] === 0 && numberOfLiveNeighbors === 3) board[row][column] = 1;
    }
  }

  return board;
};

console.log(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));
