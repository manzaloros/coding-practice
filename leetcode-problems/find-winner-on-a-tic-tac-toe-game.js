/**
 * @param {number[][]} moves
 * @return {string}
 */
let tictactoe = function (moves) {
  let n = 3;
  const rows = Array(n).fill(0);
  const cols = Array(n).fill(0);

  let majDiag = 0;
  let minDiag = 0;
  let player = 1;

  const didPlayerWin = (row, col) => (Math.abs(rows[row]) === 3 || Math.abs(cols[col]) === 3)
      || (Math.abs(majDiag) === 3 || Math.abs(minDiag) === 3);

  for (let i = 0; i < moves.length; i += 1) {
    const col = moves[i][1];
    const row = moves[i][0];

    rows[row] += player;
    cols[col] += player;

    if (row === col) majDiag += player;
    if ((row + col) === 2) minDiag += player;
    console.log(minDiag, majDiag, rows, cols);

    if (didPlayerWin(row, col)) return player === 1 ? 'A' : 'B';

    player *= -1;
  }

  return moves.length === 9 ? 'Draw' : 'Pending';
};
