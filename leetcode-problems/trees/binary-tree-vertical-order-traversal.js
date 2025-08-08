/**
 * time: O(nodes)
 * space: O(nodes) for column map
 */
const verticalOrderBFS = (root) => {
	const result = [];

	if (root) {
		const colMap = new Map();

		/**
		 * Maintain min and max column so we can iterate them later. This will
		 * produce the columns in ascending order for the result arr.
		 */
		let minCol = 0;
		let maxCol = 0;
		const q = [[root, 0]];

		while (q.length > 0) {
			const [node, col] = q.shift();

			if (node) {
				if (!colMap.has(col)) {
					colMap.set(col, []);
				}
				colMap.get(col).push(node.val);

				minCol = Math.min(minCol, col);
				maxCol = Math.max(maxCol, col);

				q.push([node.left, col - 1]);
				q.push([node.right, col + 1]);
			}
		}

		for (let col = minCol; col < maxCol + 1; col += 1) {
			result.push(colMap.get(col));
		}
	}

	return result;
};

/**
 * time: O(width * (height * log height))
 */
const verticalOrderDFS = (root) => {
	if (!root) return [];
	const map = new Map();
	let smallestCol = 0;
	let largestCol = 0;

	const dfs = (node, row, column) => {
		if (!node) return;

		if (!map.has(column)) {
			map.set(column, []);
		}

		// Store both row and value so we can sort later by row
		map.get(column).push([row, node.val]);

		smallestCol = Math.min(smallestCol, column);
		largestCol = Math.max(largestCol, column);

		dfs(node.left, row + 1, column - 1);
		dfs(node.right, row + 1, column + 1);
	};

	dfs(root, 0, 0);

	const result = [];

	for (let col = smallestCol; col <= largestCol; col++) {
		const entries = map.get(col) || []; // Ensure entries is not undefined
		entries.sort((a, b) => a[0] - b[0]); // Sort by row
		const colValues = entries.map(([, val]) => val);
		result.push(colValues);
	}

	return result;
};
