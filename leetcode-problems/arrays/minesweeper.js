/* Let's play the minesweeper game (Wikipedia, online game)!

You are given an m x n char matrix board representing the game board where:

'M' represents an unrevealed mine, 'E' represents an unrevealed empty square,
'B' represents a revealed blank square that has no adjacent mines (i.e., above,
below, left, right, and all 4 diagonals), digit ('1' to '8') represents how many
mines are adjacent to this revealed square, and 'X' represents a revealed mine.
You are also given an integer array click where click = [clickr, clickc]
represents the next click position among all the unrevealed squares ('M' or
'E').

Return the board after revealing this position according to the following rules:

If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
If an empty square 'E' with no adjacent mines is revealed, then change it to a
revealed blank 'B' and all of its adjacent unrevealed squares should be revealed
recursively.  If an empty square 'E' with at least one adjacent mine is
revealed, then change it to a digit ('1' to '8') representing the number of
adjacent mines.  Return the board when no more squares will be revealed.

Example 1:

Input: board =
[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]],
click = [3,0] Output:
[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
Example 2:

Input: board =
[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]],
click = [1,2] Output:
[["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]

Constraints:

m == board.length n == board[i].length 1 <= m, n <= 50 board[i][j] is either
'M', 'E', 'B', or a digit from '1' to '8'.  click.length == 2 0 <= clickr < m 0
<= clickc < n board[clickr][clickc] is either 'M' or 'E'. */
/*
board: [[E, M, E, E]...]
click: [0,0], only one click
board after click: [[1, M, E, E]]

blank squares start as E?
Mines start as M, change to X and end game. Stop looking at next clicks?

When you reveal a blank, recursively reveal all other blanks around it
Same with numbers, recursively reveal them.
*/
class Cell {
  constructor([row, col], board) {
    this.row = row;
    this.col = col;
    this.val = board[row][col];
    this.key = `${row}:${col}`;
  }

  checkNeighbors(board, neighbors) {
    const { row, col } = this;
    let mines = 0;

    neighbors.forEach(([neighborRow, neighborCol]) => {
      if (board[neighborRow][neighborCol] === 'M') mines += 1;
    });

    return mines;
  }
}

const updateBoard = (board, click) => {
  const isInBounds = ([row, col], seen, key) => (row >= 0 && col >= 0
    && row < board.length && col < board[0].length);

  const getNeighbors = (row, col) => [[row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
    [row - 1, col - 1],
    [row + 1, col + 1],
    [row + 1, col - 1],
    [row - 1, col + 1]].filter((neighbor) => isInBounds(neighbor));

  const updateCell = (cell, neighbors) => {
    if (cell.val !== 'M') {
      let adjacentMines = 0;

      adjacentMines = cell.checkNeighbors(board, neighbors);

      if (adjacentMines === 0) {
        board[cell.row][cell.col] = 'B';
      } else {
        board[cell.row][cell.col] = String(adjacentMines);
      }

      return adjacentMines;
    }

    board[cell.row][cell.col] = 'X';

    return -1;
  };

  const firstCell = new Cell(click, board);
  const queue = [firstCell];
  const seen = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    // We need this conditional
    if (seen.has(current.key)) continue;

    const neighbors = getNeighbors(current.row, current.col);

    seen.add(current.key);

    const isMine = updateCell(current, neighbors);

    if (isMine === -1) return board;

    if (isMine === 0) {
      for (let i = 0; i < neighbors.length; i += 1) {
        const neighbor = new Cell(neighbors[i], board);

        // Taking the conditional out here also works...
        if (!seen.has(neighbor.key)) queue.push(neighbor);
      }
    }
  }

  return board;
};

updateBoard([['E', 'E', 'E', 'E', 'E'], ['E', 'E', 'M', 'E', 'E'], ['E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E']], [3, 0]);
