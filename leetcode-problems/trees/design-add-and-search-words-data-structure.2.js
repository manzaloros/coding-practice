export class WordDictionary {
	trie = {};

	// time: O(number of words * average length of word
	// space: O(total number of characters in words)
	addWord(word) {
		let node = this.trie;
		for (const char of word) {
			node = node[char] ??= {};
		}
		node.isWord = true;
	}

	// time: O(number of words * average length of word
	// space: O(length of average word for call stack)
	search(word) {
		let found = false;
		const dfs = (index, node) => {
            if (found) return;
			if (index === word.length && node.isWord) {
				found = true;
				return;
			}

			const char = word[index];

			if (char === ".") {
				for (const key of Object.keys(node)) {
                    if (key === 'isWord') continue;
					dfs(index + 1, node[key]);
				}
			} else {
				const nextNode = node[char];

				if (nextNode) {
					dfs(index + 1, nextNode);
				}
			}
		};

		dfs(0, this.trie);
		return found;
	}
}
