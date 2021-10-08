/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function (board, word) {
  const [rows, cols] = [board.length, board[0].length];
  let found = false;

  const getNeighbors = (row, col) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ]
    .filter(([nRow, nCol]) => (
      nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols
    ));

  const dfs = (row, col, index, seen) => {
    if (word[index] === board[row][col]) {
      const key = `${row}:${col}`;
      seen.add(key);

      if (index === word.length - 1) found = true;

      getNeighbors(row, col).forEach(([nRow, nCol]) => {
        if (!seen.has(`${nRow}:${nCol}`)) dfs(nRow, nCol, index + 1, seen);
      });

      seen.delete(key);
    }
  };

  board.forEach((row, rowIndex) => {
    row.forEach((char, colIndex) => {
      dfs(rowIndex, colIndex, 0, new Set());
    });
  });

  return found;
};

exist([['A', 'B', 'C', 'E'],
  ['S', 'F', 'E', 'S'],
  ['A', 'D', 'E', 'E']],
'ABCESEEEFS');
