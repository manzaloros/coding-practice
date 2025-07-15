/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
export const findWords = (board, words) => {
	const rows = board.length;
	const cols = board[0].length;
	// make a trie out of all the words, mark full word as true
	// make a result arr
	const trie = {};
	for (const word of words) {
		let node = trie;
		for (const char of word) {
			node[char] ??= {};
			node = node[char];
		}
		node.isWord = word;
	}
	const result = [];

	// dfs function, takes in a word, a trie, char index, row, col
	// if the index equals the word length - 1 and the trie has the isWord property, add this word to the result and return
	// current char is word[char]
	// if the trie has the current char
	// mark on the board an X that this cell was visited
	// for each up, down, left, right
	// DFS again with the node[char]
	// afterwards, mark the board back from an X with the original char
	const dfs = (node, row, col) => {
		if (node.isWord) {
			result.push(node.isWord);
		} else {
			const char = board[row][col];
			board[row][col] = "~";

			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
			]
				.map(([nRow, nCol]) => [row + nRow, col + nCol])
				.filter(([nRow, nCol]) => {
					return (
						nRow < rows &&
						nCol < cols &&
						nRow >= 0 &&
						nCol >= 0 &&
						board[nRow][nCol] !== "~"
					);
				})
				.forEach(([nRow, nCol]) => {
					const nChar = board[nRow][nCol];
					if (node[nChar]) {
						dfs(node[nChar], nRow, nCol);
					}
				});
			board[row][col] = char;
		}
	};

	// iterate over rows and cols of the board
	// if the trie has the letter in the cell, start a DFS from there for the word
	board.forEach((row, rowIndex) => {
		row.forEach((char, colIndex) => {
			if (trie[char]) {
				dfs(trie[char], rowIndex, colIndex);
			}
		});
	});

	// return result arr
	return result;
};
