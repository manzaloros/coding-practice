/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function (board, word) {
  const [rows, cols] = [board.length, board[0].length];

  let found = false;

  const getNeighbors = (row, col, index) => (
    [
      [row, col + 1],
      [row, col - 1],
      [row + 1, col],
      [row - 1, col],
    ].filter(([nRow, nCol]) => {
      if (nRow < 0) return false;
      if (nCol < 0) return false;
      if (nRow > rows - 1) return false;
      if (nCol > cols - 1) return false;
      if (board[nRow][nCol] !== word[index]) return false;

      return true;
    })
  );

  const dfs = (row, col, index, visited) => {
    const key = `${row}:${col}`;
    if (!visited.has(key)) {
      visited.add(key);

      if (index === word.length - 1) found = true;

      // get neighbors that match word[index + 1]
      getNeighbors(row, col, index + 1).forEach(([nRow, nCol]) => {
        if (!visited.has(`${nRow}:${nCol}`)) dfs(nRow, nCol, index + 1, visited);
      });

      visited.delete(key);
    }
  };

  const checkMatch = (row, col) => {
    if (board[row][col] === word[0]) dfs(row, col, 0, new Set());
  };

  const iterate = (mat, cb) => {
    mat.forEach((row, rowIndex) => {
      row.forEach((element, colIndex) => cb(rowIndex, colIndex));
    });
  };

  iterate(board, checkMatch);

  return found;
};

exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED');
