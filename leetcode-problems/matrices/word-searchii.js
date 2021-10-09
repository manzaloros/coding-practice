/*
  Time: O(cells in board * (4 directions * 3 neighbor cells ^ (length of longest
    word  - 1)))
  Space: O(number of chars in trie)
*/
const findWordsTrie = (board, words) => {
  const [rows, cols] = [board.length, board[0].length];
  const found = new Set();
  const trie = new Map();

  const buildTrie = (word, index = 0, node = trie) => {
    if (index === word.length) {
      node.set('word', word);
    } else {
      const char = word[index];
      if (!node.has(char)) node.set(char, new Map());

      buildTrie(word, index + 1, node.get(char));
    }
  };

  words.forEach((word) => buildTrie(word));

  const makeKey = (row, col) => `${row}:${col}`;

  const getNeighbors = (row, col) => [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ].filter(([nRow, nCol]) => (
    nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols
  ));

  const dfs = (row, col, node, seen) => {
    const char = board[row][col];
    const child = node.get(char);

    if (child) {
      const word = child.get('word');
      if (word) found.add(word);

      const key = makeKey(row, col);
      seen.add(key);

      getNeighbors(row, col).forEach(([nRow, nCol]) => {
        const nKey = makeKey(nRow, nCol);

        if (!seen.has(nKey)) dfs(nRow, nCol, child, seen);
      });

      seen.delete(key);
    }
  };

  board.forEach((row, rowIndex) => {
    row.forEach((char, colIndex) => {
      dfs(rowIndex, colIndex, trie, new Set());
    });
  });

  return Array.from(found);
};

// findWordsTrie([['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']],
//   ['oath', 'pea', 'eat', 'rain']);

findWordsTrie([['a', 'b', 'c'], ['a', 'e', 'd'], ['a', 'f', 'g']],
  ['abcdefg', 'gfedcbaaa', 'eaabcdgfa', 'befa', 'dgc', 'ade']);
