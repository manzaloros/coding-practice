const alienOrder = (words) => {
	/**
      key: node
      value: list of nodes that share a directed edge to the node

      {a: [b,c]} // means that b and c both are directed to "a".
      If a node has an empty list, it means that no nodes lead to it. It is the first node
      in the directed graph.
     */
	const reverseList = new Map();

	for (const word of words) {
		for (let i = 0; i < word.length; i += 1) {
			const char = word[i];
			if (!reverseList.has(char)) reverseList.set(char, []);
		}
	}
	for (let i = 0; i < words.length - 1; i += 1) {
		const word1 = words[i];
		const word2 = words[i + 1];
		if (word1.length > word2.length && word1.startsWith(word2)) return ""; // e.g. (zxr, zx) invalid

		// iterate over characters of shortest word
		for (let j = 0; j < Math.min(word1.length, word2.length); j += 1) {
			if (word1[j] !== word2[j]) {
				/* make higher character lead to lower character.

                zx, zar -> {a: [r]}, a shares an edge with r (meaning r comes
				 before a in the order).

                 If you do it like {r: [a]}, this is a normal adjacency list,
                 meaning r shares a directed edge to A. Then, when you do the
                 topological DFS later, you'll have to reverse the order because
                 it will come out in reverse order ("a", "r"). So, the correct
                 ordering is "r"->"a".
                */
				reverseList.get(word2[j]).push(word1[j]);
				break;
			}
		}
	}

	const topoOrder = [];
	const seen = new Set(); // track that we've visited the node
	let cyclical = false;

	const dfs = (letter, branchMemo /* checks for cycles */) => {
        if (cyclical) return;
		seen.add(letter);
		branchMemo.add(letter);

        /* Explore nodes that lead to the current letter, i.e. those that come
        before the node in the alphabet */
		reverseList.get(letter).forEach((neighbor) => {
			if (branchMemo.has(neighbor)) cyclical = true;

			if (!seen.has(neighbor)) dfs(neighbor, branchMemo);
		});

		branchMemo.delete(letter);
		topoOrder.push(letter);
	};
	reverseList.forEach((_list, letter /* value, key */) => {
		if (!seen.has(letter)) dfs(letter, new Set());
	});
	return cyclical ? "" : topoOrder.join("");
};

/**
 * Topological sort:
 * 
 * ordering array
 * seen set
 * cycle is false
 * 
 * dfs node, branchMemo
 *   add node to seen
 *   add node to branchMemo
 *   for each neighbor of node
 *     if branchMemo has the neighbor, cycle is true
 *     if neighbor isn't in seen, dfs(neighbor, branchmemo)
 * 
 *   delete node from branchMemo
 *   push node to front of ordering array (unshift)   
 * 
 * 
 * for each node, if node isn't in seen, dfs(node, new set)
 * 
 * return ordering 
 */