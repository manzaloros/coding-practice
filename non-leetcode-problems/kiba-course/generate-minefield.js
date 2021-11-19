const generateMinefield = (size, numMines) => {
  const board = Array(size)
    .fill(0)
    .map(() => Array(size).fill(false));

  let count = numMines;

  const iterate = (matrix, cb) => {
    matrix.forEach((row, rowIndex) => {
      row.forEach((element, colIndex) => {
        cb(element, rowIndex, colIndex);
      });
    });
  };

  const addMines = (element, row, col) => {
    if (count > 0) {
      board[row][col] = true;
      count -= 1;
    }
  };

  iterate(board, addMines);

  // Naive shuffle
  //   const swap = (element, row, col) => {
  //     let min = 0;
  //     let max = size;

  //     const rRow = Math.floor(Math.random() * size);
  //     const rCol = Math.floor(Math.random() * (max - min) + min);
  //     [board[row][col], board[rRow][rCol]] = [board[rRow][rCol], board[row][col]];
  //   };

  // Fischer Yates
  for (let row = size - 1; row > 0; row -= 1) {
    for (let col = size - 1; col > 0; col -= 1) {
      const randRow = Math.floor(Math.random() * (row + 1));
      const randCol = Math.floor(Math.random() * (col + 1));

      [board[row][col], board[randRow][randCol]] = [board[randRow][randCol], board[row][col]];
    }
  }

  return board;
};

generateMinefield(4, 2);
