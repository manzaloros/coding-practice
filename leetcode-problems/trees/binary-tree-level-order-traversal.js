const levelOrderOneQueue = (root) => {
	const result = [];
	const queue = [root];
	while (queue.length > 0) {
		const level = []; // will be pushed to result
    /**
     * Keep track of the size so that you don't need two queues
     */
		const sizeOfCurrentLevel = queue.length; 
		for (let i = 0; i < sizeOfCurrentLevel; i += 1) {
			const dequeued = queue.shift();
			if (dequeued) {
				level.push(dequeued.val);
				queue.push(dequeued.left);
				queue.push(dequeued.right);
			}
		}
		if (level.length > 0) result.push(level);
	}
	return result;
};

const levelOrder = (root) => {
	if (!root) return [];
	let nextLevelQ = [];
	let prevLevelQ = [root];

	const levels = [];

	while (prevLevelQ.length > 0) {
		const level = [];
		while (prevLevelQ.length > 0) {
			const current = prevLevelQ.shift();

			level.push(current.val);
			if (current.left) nextLevelQ.push(current.left);
			if (current.right) nextLevelQ.push(current.right);
		}

		levels.push(level);
		prevLevelQ = nextLevelQ;
		nextLevelQ = [];
	}

	return levels;
};

const levelOrderRecursiveDFS = (root) => {
	const levels = [];

	const dfs = (node, level) => {
		if (node) {
			if (!Array.isArray(levels[level])) levels[level] = [];
			levels[level].push(node.val);

			if (node.left) dfs(node.left, level + 1);
			if (node.right) dfs(node.right, level + 1);
		}
	};

	dfs(root, 0);

	return levels;
};
