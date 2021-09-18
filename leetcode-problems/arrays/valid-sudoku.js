const isValidSudoku = (board) => {
/*
  inst rows, cols

  inst validateRows(row, col)
    inst seen set
    iterate matrix[i][col] current 0 to 9 exclusive
      add element to seen if digit
      if already seen, return false
    return true

  inst validateCols(row, col)
    iterate matrix[row][i]

  inst validateSquare(row, col)
    iterate matrix

  iterate over rows cols
    validate every element
    return false if !validate

  return true if not false
*/
  const rows = board.length;
  const cols = board[0].length;

  const isValid = (row, col, char) => {
    for (let num = 0; num < 9; num += 1) {
      const potentialRow = board[num][col];
      const potentialCol = board[row][num];

      /*
        col is % 3 because it will be the same col nums repeated
      */
      const potentialSquareRow = 3 * Math.floor(row / 3) + Math.floor(num / 3);
      const potentialSquareCol = 3 * Math.floor(col / 3) + (num % 3);

      const currentSquareRow = 3 * Math.floor(row / 3) + Math.floor(row / 3);
      const currentSquareCol = 3 * Math.floor(col / 3) + (col % 3);

      const potentialSquare = board[potentialSquareRow][potentialSquareCol];

      if (num !== row && potentialRow === char) return false;

      if (num !== col && potentialCol === char) return false;

      if ((potentialSquareRow !== currentSquareRow) && (potentialSquareCol !== currentSquareCol)) {
        if (potentialSquare === char) return false;
      }
    }

    return true;
  };

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const current = board[row][col];

      if (current !== '.') {
        if (!isValid(row, col, board[row][col])) return false;
      }
    }
  }

  return true;
};

// isValidSudoku([
//   ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ]);

isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
