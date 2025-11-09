/**
 * BFS of an undirected, cyclic graph
 *
 * Each node (word) shares an edge with any word that it differs only one
 * character from.
 *
 * We're finding the shortest path between the start word and the end word.
 *
 * Time: O(words.length * (word length ^ 2))
 */
const ladderLength = (beginWord, endWord, wordList) => {
	const words = wordList.slice(); // not mutating function argument
	words.push(beginWord);

	const patternToWords = new Map();
	const wordToPatterns = new Map();

	for (const word of words) {
		const patterns = [];
		const { length } = word;

		for (let i = 0; i < length; i += 1) {
			// O(word.length)
			// O(word.length)
			const pattern = `${word.substring(0, i)}*${word.substring(i + 1, length + 1)}`;
			if (!patternToWords.has(pattern)) patternToWords.set(pattern, []);
			patternToWords.get(pattern).push(word);

			patterns.push(pattern);
		}

		wordToPatterns.set(word, patterns);
	}

	const visited = new Set();
	const queue = [{ word: beginWord, distance: 1 /* start at distance 1 */ }];
	visited.add(beginWord);
	/* start distance at 1 because beginWord wasn't in the list and we added it.
	So the distance is already 1 for any neighbor starting off:
    beginWord: 'hit'
    list:      ['hot']
    pushing beginWord to list: ['hit', 'hot']

    get neighbors of 'hit': ['hot']
    visiting that neighbor is distance 2 (not 1)
    
    */

	// O(words.length * word.length).
	while (queue.length > 0) {
		const { distance, word } = queue.shift(); // would use a real queue here to avoid O(n) dequeue on an array
		if (word === endWord) return distance;
		// don't do visited.add(), here! Do it when enqueueing the neighbor node.

		// O(word.length) patterns
		for (const pattern of wordToPatterns.get(word)) {
			const neighbors = patternToWords.get(pattern) || [];
			for (const neighbor of neighbors) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor); // REQUIRED: this is the KEY to not optimizing!! Don't do it on dequeue.
					queue.push({ distance: distance + 1, word: neighbor });
				}
			}
			patternToWords.set(pattern, []); // optional prune
		}
	}

	return 0;
};
