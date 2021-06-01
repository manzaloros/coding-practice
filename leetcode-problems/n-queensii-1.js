/*   N-Queens II The n-queens puzzle is the problem of placing n queens on an n
x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens
puzzle.

Example 1:

Input: n = 4 Output: 2 Explanation: There are two distinct solutions to the
4-queens puzzle as shown.  Example 2:

Input: n = 1 Output: 1

Constraints:

1 <= n <= 9 */

const totalNQueens = (n) => {
  const solutions = [];

  const createBoard = (state) => {
    const board = [];

    for (let row = 0; row < n; row += 1) {
      board.push(String(state[row].join('')));
    }

    return board;
  };

  const backtrack = (row, diagonals, antiDiagonals, cols, state) => {
    if (row === n) {
      solutions.push(createBoard(state));
    } else {
      for (let col = 0; col < n; col += 1) {
        const currDiagonal = row - col;
        const currAntiDiagonal = row + col;

        if (!(cols.has(col)
        || diagonals.has(currDiagonal)
        || antiDiagonals.has(currAntiDiagonal))) {
          cols.add(col);
          diagonals.add(currDiagonal);
          antiDiagonals.add(currAntiDiagonal);
          state[row][col] = 'Q';

          backtrack(row + 1, diagonals, antiDiagonals, cols, state);

          cols.delete(col);
          diagonals.delete(currDiagonal);
          antiDiagonals.delete(currAntiDiagonal);
          state[row][col] = '.';
        }
      }
    }
  };

  const solve = () => {
    const board = [];
    for (let i = 0; i < n; i += 1) {
      board[i] = [];
      for (let j = 0; j < n; j += 1) {
        board[i][j] = '.';
      }
    }

    backtrack(0, new Set(), new Set(), new Set(), board);
    return solutions;
  };

  return solve();
};

console.log(totalNQueens(4));
