const solve = (board) => {
  if (board === null || board.length === 0) return;

  const m = board.length;
  const n = board[0].length;
  // Add 1 to arrays for dummy boarder
  const parents = Array(m * n + 1).fill(0).map((v, i) => i);
  const ranks = Array(m * n + 1).fill(0);

  const find = (i) => {
    if (i !== parents[i]) parents[i] = find(parents[i]);

    return parents[i];
  };

  const union = (x, y) => {
    const parentX = find(x);
    const parentY = find(y);

    if (parentX !== parentY) {
      if (ranks[parentX] > ranks[parentY]) {
        parents[parentY] = parentX;
      } else if (ranks[parentX] < ranks[parentY]) {
        parents[parentX] = parentY;
      } else {
        parents[parentY] = parentX;
        ranks[parentX] += 1;
      }
    }
  };

  const numRows = m;
  const numCols = n;
  const dummyBorder = numRows * numCols;

  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      if (board[row][col] === 'O') {
        const position = row * numCols + col;
        // If space is on the boundry, connect boundry with dummyBorder, the
        // last "parent" root in the union find array
        if (row === 0 || row === numRows - 1 || col === 0 || col === numCols - 1) {
          union(position, dummyBorder);
        }
        // If the adjacent space is in bounds and is a 'O', union the current
        // position and the adjacent space
        if (row > 0 && board[row - 1][col] === 'O') union(position, (row - 1) * numCols + col);
        if (row < numRows - 1 && board[row + 1][col] === 'O') union(position, (row + 1) * numCols + col);
        if (col > 0 && board[row][col - 1] === 'O') union(position, row * numCols + (col - 1));
        if (col < numCols - 1 && board[row][col + 1] === 'O') union(position, row * numCols + (col + 1));
      }
    }
  }

  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      // If the current position isn't connected to the dummy boarder, it's an
      // x, because we unioned all boardering 'O's in the previous loop
      if (find(row * numCols + col) !== find(dummyBorder)) {
        board[row][col] = 'X';
      }
    }
  }
};

solve([['O', 'X', 'X', 'O', 'X'], ['X', 'O', 'O', 'X', 'O'], ['X', 'O', 'X', 'O', 'X'], ['O', 'X', 'O', 'O', 'O'], ['X', 'X', 'O', 'X', 'O']]);
