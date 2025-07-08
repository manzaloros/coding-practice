/**
 * Find words that are on a 2d board.
 * 
 * Use a trie (prefix tree) because it groups naturally by prefix, so you don't need to 
 * search redundantly for words matching the same prefix.
 */
export const findWords = (board, words) => {
    const [rows, cols] = [board.length, board[0].length];

    // Build trie. Use a plain object instead of a map. Easier to read, less memory, more performant. 
    const trie = {};
    for (const word of words) {
        let node = trie;
        for (const char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.word = word; // Store word at end node so we know we've reached a word.
    }

    const result = [];

    const dfs = (row, col, node) => {
        const char = board[row][col];
        const nextNode = node[char];
        if (!nextNode) return;

        if (nextNode.word) {
            result.push(nextNode.word);
            nextNode.word = undefined; // Avoid duplicates
        }

        board[row][col] = '#'; // Mark visited before we visit all neighbors.

        for (const [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1]]) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                board[newRow][newCol] !== '#'
            ) {
                dfs(newRow, newCol, nextNode);
            }
        }

        board[row][col] = char; // Backtrack (restore the board with the char).

        // Trie pruning: if no more children, delete this branch
        if (Object.keys(nextNode).length === 0) {
            delete node[char];
        }
    };

    // Start DFS from every cell
    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            dfs(r, c, trie);
        }
    }

    return result;
};

// My attempt, based on previous ones that isn't efficient.
// Biggest change, to make it more efficient, is to prune the trie.
export const findWordsMyTry = (board, words) => {
    const [rows, cols] = [board.length, board[0].length];

    const trie = new Map();

    for (const word of words) {
        let curr = trie;
        for (const char of word) {
            if (!curr.has(char)) {
                curr.set(char, new Map());
            }
            curr = curr.get(char);
        }
        curr.set('word', word);
    }

    const getKey = (row, col) => `${row}:${col}`

    const getNeighbors = (row, col, visited /* Set */) => [
        [row + 1, col],
        [row - 1, col], 
        [row, col + 1], 
        [row, col - 1], 
    ].filter(([nRow, nCol]) => {
        if (nRow < 0 || nRow >= rows || nCol < 0 || nCol >= cols || visited.has(getKey(nRow, nCol))) return false;
        return true;
    })

    const list = new Set();
    

    const search = (node, row, col, visited) => {
        const key = getKey(row,col);
        visited.add(key);

        if (node.has('word')) list.add(node.get('word'));

        for (const [nRow, nCol] of getNeighbors(row, col, visited)) {
            const char = board[nRow][nCol];
            if (node.has(char)) search(node.get(char), nRow, nCol, visited)
        }
        visited.delete(key);
    }

    for (const [rowIndex,row] of board.entries()) {
        for (const [colIndex] of row.entries()) {
            const char = board[rowIndex][colIndex];
            if (trie.has(char)) search(trie.get(char), rowIndex, colIndex, new Set())
        }
    }

    return Array.from(list);
};

