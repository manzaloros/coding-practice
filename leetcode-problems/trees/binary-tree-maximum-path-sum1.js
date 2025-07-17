/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root) => {
	let maxValue = Number.NEGATIVE_INFINITY;

	const findMax = (node) => {
		if (!node) return 0;

		const leftGain = Math.max(findMax(node.left), 0);
		const rightGain = Math.max(findMax(node.right), 0);

		// Update global max if including the root makes it larger
		maxValue = Math.max(maxValue, leftGain + rightGain + node.val);

		// return root + the larger branch. This is because you cannot have a fork
		// in your path, so when you return the max gain from a particular node, you
		// have to choose that node + max(right, left) so that it's a straight path
		// up the tree and not a fork
		return Math.max(leftGain, rightGain) + node.val;
	};

	// ends up returning a path that does NOT include the root, so you need to
	// return the global maximum after this
	findMax(root);

	return maxValue;
};
