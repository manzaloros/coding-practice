/**
 * @param {number[][]} moves
 * @return {string}
 */
let tictactoe = function (moves) {
  let n = 3;

  // If num every adds to 3 or -3, theres a win
  const [rows, cols] = [Array(3).fill(0), Array(3).fill(0)];
  let diag = 0;
  let antiDiag = 0;

  let player = 1;
  let winner;

  const isWin = (row, col) => Math.abs(rows[row]) === n || Math.abs(cols[col]) === n
  || Math.abs(diag) === n || Math.abs(antiDiag) === n;

  moves.forEach(([row, col]) => {
    if (!winner) {
      rows[row] += player;
      cols[col] += player;

      // [0,0], [1,1], [2,2]
      if (row === col) diag += player;
      // [2,0], [1,1], [0,2] anti diag
      if (row + col === n - 1) antiDiag += player;

      if (isWin(row, col)) winner = player === 1 ? 'A' : 'B';

      player *= -1;
    }
  });

  return winner || (moves.length === n * n ? 'Draw' : 'Pending');
};

tictactoe([[2, 2], [0, 2], [1, 0], [0, 1], [2, 0], [0, 0]]);
