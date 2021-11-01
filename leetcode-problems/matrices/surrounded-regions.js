/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 any O that is not connected to the border is surrounded?

 iterate matrix
   if O,
     if col + 1 is O
       union with that cell
     if row + 1 is O
       union with that cell

 iterate parents array
   if cell parent is not border (0) and cell is O, make it an X in the matrix
 */

/*
     Time: With path compression and rank: ~O(rows * cols)
     Space: O(rows * cols)
   */
let solve = function (board) {
  const [rows, cols] = [board.length, board[0].length];
  const border = rows * cols;

  const parents = Array(rows * cols + 1).fill(0).map((el, i) => i);
  const rank = Array(rows * cols + 1).fill(0);

  const iterate = (cb) => {
    board.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        cb(el, rowIndex, colIndex);
      });
    });
  };

  const find = (index) => {
    if (index !== parents[index]) parents[index] = find(parents[index]);

    return parents[index];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      const [rankX, rankY] = [rank[rootX], rank[rootY]];
      // don't need to increase rank if they aren't equal!
      if (rankX < rankY) {
        parents[rootX] = rootY;
      } else if (rankX > rankY) {
        parents[rootY] = rootX;
      } else {
        rank[rootX] += 1;

        parents[rootY] = rootX;
      }
    }
  };

  const getFlatCoord = (row, col) => row * cols + col;

  const unionCells = (el, row, col) => {
    if (el === 'O') {
      const flatCoord = getFlatCoord(row, col);

      if (row === rows - 1 || row === 0 || col === cols - 1 || col === 0) {
        union(flatCoord, border);
      }

      // using optional chaining. Also could just check if row and col are in bounds
      if (board?.[row + 1]?.[col] === 'O') {
        union(flatCoord, getFlatCoord(row + 1, col));
      }

      if (board?.[row]?.[col + 1] === 'O') {
        union(flatCoord, getFlatCoord(row, col + 1));
      }
    }
  };

  const changeToX = (el, row, col) => {
    const flatCoord = row * cols + col;

    if (find(flatCoord) !== find(border) && el === 'O') board[row][col] = 'X';
  };

  iterate(unionCells);

  iterate(changeToX);
};

// solve([['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']]);
// solve(
//   [['X', 'O', 'X', 'X'],
//     ['O', 'X', 'X', 'X'], ['X', 'X', 'X', 'O'],
// ['O', 'X', 'X', 'X'], ['X', 'O', 'X', 'O'], ['O', 'X', 'O', 'X']],
// );
// solve(
//   [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']],
// );
solve(
  [['O', 'O', 'O', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O', 'O'], ['O', 'X', 'O', 'X', 'O', 'O'], ['O', 'X', 'O', 'O', 'X', 'O'], ['O', 'X', 'O', 'X', 'O', 'O'], ['O', 'X', 'O', 'O', 'O', 'O']],
);
