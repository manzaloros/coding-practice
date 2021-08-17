const solveSudoku = (board) => {
  const boxSize = 3;
  const rowSize = boxSize * boxSize;

  const rows = Array(rowSize).fill(Array(rowSize + 1).fill(0));
  const columns = Array(rowSize).fill(Array(rowSize + 1).fill(0));
  const boxes = Array(rowSize).fill(Array(rowSize + 1).fill(0));

  let sudokuSolved = false;
  const getIndex = (row, col) => Math.floor(row / boxSize) * boxSize + Math.floor(col / boxSize);

  const couldPlace = (num, row, col) => {
    const index = getIndex(row, col);
    return rows[row][num] + columns[boxSize][num] + boxes[index][num] === 0;
  };

  const placeNumber = (num, row, col) => {
    const index = getIndex(row, col);

    rows[row][num] += 1;
    columns[col][num] += 1;
    boxes[index][num] += 1;
    board[row][col] = (num);
  };

  const removeNumber = (num, row, col) => {
    const index = (row / boxSize) * boxSize + col / boxSize;

    rows[row][num] -= 1;
    columns[col][num] -= 1;
    boxes[index][num] -= 1;
    board[row][col] = '.';
  };

  let backtrack;

  const placeNextNumbers = (row, col) => {
    if ((col === rowSize - 1) && (row === rowSize - 1)) {
      sudokuSolved = true;
    } else if (col === rowSize - 1) {
      backtrack(row + 1, 0);
    } else {
      backtrack(row, col + 1);
    }
  };

  backtrack = (row, col) => {
    if (board[row][col] === '.') {
      for (let num = 1; num < 10; num += 1) {
        if (couldPlace(num, row, col)) {
          placeNumber(num, row, col);
          placeNextNumbers(row, col);

          if (!sudokuSolved) removeNumber(num, row, col);
        }
      }
    } else {
      placeNextNumbers(row, col);
    }
  };

  for (let row = 0; row < rowSize; row += 1) {
    for (let col = 0; col < rowSize; col += 1) {
      const num = board[row][col];
      if (num !== '.') {
        placeNumber(num, row, col);
      }
    }
  }

  backtrack(0, 0);

  return board;
};

// This sudoku solver actually works and is worth studying, unlike the one above.
const solveSudokuAlternative = (board) => {
  const rows = board.length;
  const cols = board[0].length;
  // const potentialSquares = [];

  const isValid = (row, col, char) => {
    /*
      Check every single row, col and current subsquare position (9 + 9 + 9). If
      you ever see your char you are currently checking for, you know this isn't
      a valid place to put your potential number.

      If you loop through every possible conflict and don't find your same
      number, you know it is a valid choice.
    */
    for (let num = 0; num < 9; num += 1) {
      const potentialRow = board[num][col];
      const potentialCol = board[row][num];

      const potentialSquareRow = 3 * Math.floor(row / 3) + Math.floor(num / 3);
      const potentialSquareCol = 3 * Math.floor(col / 3) + (num % 3);

      const potentialSquare = board[potentialSquareRow][potentialSquareCol];

      if (potentialRow === char) return false;

      if (potentialCol === char) return false;

      if (potentialSquare === char) return false;
    }

    return true;
  };

  const backtrack = () => {
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const current = board[row][col];

        // If the current space is open, try all numbers in it
        if (current === '.') {
          for (let num = 1; num <= 9; num += 1) {
            const char = String(num);

            // If placing the number is a valid choice
            if (isValid(row, col, char)) {
              board[row][col] = char;

              // Don't unplace number if you've already gone through entire
              // board
              const workingChoice = backtrack();
              if (workingChoice) return true;

              // Unplace number
              board[row][col] = '.';
            }
          }

          // Returns from recursive call when you have tried every number in the
          // slot
          return false;
        }
      }
    }

    // Stop recursing when you've gone through entire board
    return true;
  };

  backtrack();
};

solveSudokuAlternative([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']]);
