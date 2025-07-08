/**
 * In order traversal to print BST values in ascending order.
 *
 * Iterative
 */
const kthSmallest = (root, k) => {
	const stack = [];
	let node = root;
	let count = k;

	while (true) {
		while (node) {
			stack.push(node);
			node = node.left;
		}

		node = stack.pop();
		if (count === 1) return node.val;
		count -= 1;
		node = node.right;
	}
};

/**
 * Using an object to track state in the params.
 */
export const kthSmallestNoHelper = (
	root,
	k,
	state = { result: null, count: 0 } /* Object to track state */,
) => {
	if (!root || state.result !== null) return;

	kthSmallest(root.left, k, state);

	state.count += 1;
	if (state.count === k) {
		state.result = root.val;
	} else {
		kthSmallest(root.right, k, state);
	}

	return state.result;
};

const kthSmallestRecursive = (root, k) => {
	let count = 0;
	let result = null;

	const dfs = (node) => {
		if (!node || result !== null) return;

		dfs(node.left);

		count += 1;
		if (count === k) {
			result = node.val;
		} else {
			dfs(node.right);
		}
	};

	dfs(root);
	return result;
};
