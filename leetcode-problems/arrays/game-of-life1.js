const gameOfLife = (board) => {
  const [rows, cols] = [board.length, board[0].length];
  const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, -1], [1, -1], [1, 1], [-1, 1]];

  const countNeighbors = (row, col) => {
    let count = 0;

    neighbors.forEach(([y, x]) => {
      let neighborRow = y + row;
      let neighborCol = x + col;

      if ((neighborRow >= 0 && neighborRow < rows) && (neighborCol >= 0 && neighborCol < cols)) {
        const neighbor = board[neighborRow][neighborCol];

        if (Math.abs(neighbor) === 1) count += 1;
      }
    });

    return count;
  };

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = board[row][col];
      const count = countNeighbors(row, col);

      if (cell === 1 && (count !== 2 && count !== 3)) {
        board[row][col] = -1;
      } else if (cell === 0 && count === 3) board[row][col] = 2;
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = board[row][col];

      if (cell === 2) board[row][col] = 1;
      if (cell === -1) board[row][col] = 0;
    }
  }
};

gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]);
