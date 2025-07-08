/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  const [rows, cols] = [board.length, board[0].length];

  const trie = new Map();

  words.forEach((word) => {
    let curr = trie;
    word.split('').forEach((char) => {
      if (!curr.has(char)) curr.set(char, new Map());
      curr = curr.get(char);
    });

    // mark that this is the end of the word
    curr.set('word', word);
  });

  const getNeighbors = (row, col, visited) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ].filter(([nRow, nCol]) => {
    if (nRow >= rows) return false;
    if (nCol >= cols) return false;
    if (nRow < 0) return false;
    if (nCol < 0) return false;
    // if already visited, don't return as a neighbor:
    if (visited.has(`${nRow}:${nCol}`)) return false;

    return true;
  });

  const list = new Set();

  // DFS. BFS CAN be done recursively, it's rare and inefficient.
  const dfs = (node /* Map */, row, col, visited /* Set */) => {
    const key = `${row}:${col}`;
    visited.add(key);

    if (node.has('word')) list.add(node.get('word'));

    getNeighbors(row, col, visited).forEach(([nRow, nCol]) => {
      const neighborChar = board[nRow][nCol];

      if (node.has(neighborChar)) dfs(node.get(neighborChar), nRow, nCol, visited);
    });

    visited.delete(key);
  };

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const char = board[rowIndex][colIndex];
      if (trie.has(char)) dfs(trie.get(char), rowIndex, colIndex, new Set());
    });
  });

  return Array.from(list);
};

// findWords([['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']],
//   ['oath', 'pea', 'eat', 'rain']);
findWords([['o', 'a', 'b', 'n'], ['o', 't', 'a', 'e'], ['a', 'h', 'k', 'r'], ['a', 'f', 'l', 'v']],
  ['oa', 'oaa']);
