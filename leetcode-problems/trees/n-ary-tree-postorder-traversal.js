/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}

 pre: root left right
 in: left root right
 post: left right root


 Time: O(number of nodes)
 Space: iterative: recursive
 */
// iterative with reversal of array
const postorder = (root) => {
	const result = [];
	if (!root) return result;
	const stack = [];
	stack.push(root);

	while (stack.length > 0) {
		const { val, children } = stack.pop();
		result.unshift(val); // push value in reverse order

		for (const child of children) {
			stack.push(child); //
		}
	}

	return result;
};

const postorderTwoStacks = (root) => {
	const result = [];
	if (!root) return result;
	const nodeStack = [];
	const reverseStack = [];
	nodeStack.push(root);

	while (nodeStack.length > 0) {
		const node = nodeStack.pop();
		reverseStack.push(node);

		for (const child of node.children) {
			nodeStack.push(child);
		}
	}

	while (reverseStack.length > 0) {
		const node = reverseStack.pop();
		result.push(node.val);
	}

	return result;
};

const postorderRecursive = (root) => {
	const result = [];

	const dfs = (node) => {
		if (node) {
			for (const child of node.children) {
				dfs(child);
			}
			result.push(node.val); //
		}
	};

	dfs(root);

	return result;
};
