/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}

 pre order: root left right
 in order: left root right
 post order: left right root
 */
const preorder = (root) => {
	const stack = [];
	if (root) stack.push(root);
	const result = [];

	while (stack.length > 0) {
		const { val, children } = stack.pop();

		result.push(val);
		for (const child of children.reverse()) {
			if (child) {
				stack.push(child);
			}
		}
	}

	return result;
};

/**
  dfs(root), push value -> dfs(3) -> dfs(5) -> 
 */
const preorderRecursive = (root) => {
	const result = [];

	const dfs = (node) => {
		if (node) {
			result.push(node.val);

			for (const child of node.children) {
				dfs(child);
			}
		}
	};

	dfs(root);

	return result;
};
