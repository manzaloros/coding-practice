/**
 * Time: O(root nodes * subRoot nodes). For every node in the tree, we
 * check if the tree is the same as the subroot.
 * 
 * Space: O(root nodes + subroot nodes) for the call stack.
 * 
 * DFS
 *   if no node, return false since null cannot be the same as subRoot (which won't be null).
 *   
 *   if the current root is the same as the subRoot (using isSame()), return true
 * 
 *   Otherwise, return if the left tree OR the right tree is a match.
 */
const isSubtree = (root, subRoot) => {
	const dfs = (node) => {
		if (!node) return false;
		else if (isSame(node, subRoot)) return true; // O(nodes)
		return dfs(node.left) || dfs(node.right); // O(nodes)
	};

	const isSame = (node1, node2) => {
        /**
         * If one node is null, they both need to be.
         */
		if (!node1 || !node2) {
			return !node1 && !node2;
		}

		return (
			node1.val === node2.val &&
			isSame(node1.left, node2.left) &&
			isSame(node1.right, node2.right)
		);
	};

	return dfs(root);
};
