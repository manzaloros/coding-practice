/* The n-queens puzzle is the problem of placing n queens on an n x n chessboard
such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens
puzzle.

Example 1:

Input: n = 4 Output: 2 Explanation: There are two distinct solutions to the
4-queens puzzle as shown.  Example 2:

Input: n = 1 Output: 1

Constraints:

1 <= n <= 9 */

const totalNQueens = (n) => {
  const board = [];

  for (let i = 0; i < n; i += 1) {
    const column = [];
    for (let j = 0; j < n; j += 1) {
      column.push(0);
    }
    board.push(column);
  }

  const isNotUnderAttack = (row, col) => !(board[row][col] >= 1 || board[row][col] === 'q');

  const placeOrRemoveQueen = (row, col, removing) => {
    let addition = 1;

    if (removing) {
      addition = -1;
      board[row][col] = 0;
    } else {
      board[row][col] = 'q';
    }

    for (let i = 0; i < n; i += 1) {
      if (i !== col) board[row][i] += addition;
      if (i !== row) board[i][col] += addition;
    }

    // Get starting minor diagonal position
    let minorRow = row;
    let minorCol = col;

    while (minorCol > 0 && minorRow > 0) {
      minorCol -= 1;
      minorRow -= 1;
    }
    while (minorCol < n && minorRow < n) {
      if (!(minorRow === row && minorCol === col)) {
        board[minorRow][minorCol] += addition;
      }
      minorRow += 1;
      minorCol += 1;
    }

    // Get starting major diagonal position
    let majorRow = row;
    let majorCol = col;

    while (majorCol > 0 && majorRow < n - 1) {
      majorCol -= 1;
      majorRow += 1;
    }
    while ((majorCol < n && majorRow >= 0)) {
      if (!(majorRow === row && majorCol === col)) {
        board[majorRow][majorCol] += addition;
      }
      majorRow -= 1;
      majorCol += 1;
    }
  };

  const backTrackNQueen = (row = 0, count = 0) => {
    // For each column
    for (let col = 0; col < n; col += 1) {
      // Place a queen if square isn't under attack
      if (isNotUnderAttack(row, col)) {
        placeOrRemoveQueen(row, col, false);

        if (row + 1 === n) {
          count += 1;
        } else {
          // After placing, move onto the next row
          count = backTrackNQueen(row + 1, count);
        }

        // Remove queen to try placing at next column
        placeOrRemoveQueen(row, col, true);
      }
    }

    return count;
  };

  return backTrackNQueen();
};

console.log(totalNQueens(9));
