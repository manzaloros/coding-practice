const gameOfLife = (board) => {
  const rows = board.length;
  const cols = board[0].length;
  const neighbors = [-1, 0, 1];

  const getNumberOfNeighbors = (selfRow, selfCol) => {
    let number = 0;

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
          const r = (selfRow + neighbors[i]);
          const c = (selfCol + neighbors[j]);

          if ((r >= 0 && r < rows && c >= 0 && c < cols)
            && Math.abs(board[r][c]) === 1) number += 1;
        }
      }
    }
    return number;
  };

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const numberOfNeighbors = getNumberOfNeighbors(row, col);

      if ((board[row][col] === 1)
        && (numberOfNeighbors < 2 || numberOfNeighbors > 3)) board[row][col] = -1;
      if (board[row][col] === 0 && numberOfNeighbors === 3) board[row][col] = 2;
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (board[row][col] <= 0) board[row][col] = 0;
      if (board[row][col] >= 1) board[row][col] = 1;
    }
  }

  return board;
};

console.log(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));
