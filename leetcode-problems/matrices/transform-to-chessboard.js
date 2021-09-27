/* eslint-disable no-bitwise */
const movesToChessboard = (b) => {
  const { length: n } = b;
  let [rowSum, colSum, rowSwap, colSwap] = [0, 0, 0, 0];
  let possible = true;

  /*
    Any rectangle inside the board with corners top left, top right, bottom
    left, bottom right must be 4 0s, 2 1s 2 0s, or 4 0s.

    Check (XOR) top right corner, first element of curr row, first element of
    curr column, and curr element. This makes a rectangle. Like, 1 ^ 0 ^ 0 ^ 1 =
    0, so that's a valid rectangle. But 1 ^ 1 ^ 0 ^ 1 = 1, so you know that it's
    invalid.
  */
  b.forEach((row, rowIndex) => {
    row.forEach((element, colIndex) => {
      if ((b[0][0] ^ b[rowIndex][0] ^ b[0][colIndex] ^ element) === 1) possible = false;
    });
  });

  if (!possible) return -1;

  for (let i = 0; i < n; i += 1) {
    rowSum += b[0][i];
    colSum += b[i][0];
    rowSwap += b[i][0] === i % 2;
    colSwap += b[0][i] === i % 2;
  }

  /*
    Every row and col has half 1s for a valid chessboard.
  */
  if (rowSum !== Math.floor(n / 2) && rowSum !== Math.floor((n + 1) / 2)) return -1;
  if (colSum !== Math.floor(n / 2) && colSum !== Math.floor((n + 1) / 2)) return -1;

  /*
    Once you know chessboard is valid, count valid swaps
  */
  if (n % 2) {
    if (colSwap % 2) colSwap = n - colSwap;
    if (rowSwap % 2) rowSwap = n - rowSwap;
  } else {
    colSwap = Math.min(n - colSwap, colSwap);
    rowSwap = Math.min(n - rowSwap, rowSwap);
  }

  return Math.floor((colSwap + rowSwap) / 2);
};

movesToChessboard([[1, 1, 0], [0, 0, 1], [0, 0, 1]]);
