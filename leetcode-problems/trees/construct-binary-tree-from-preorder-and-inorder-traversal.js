/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
	let preorderIndex = 0;
	const map = new Map();

	inorder.forEach((element, index) => {
		map.set(element, index);
	});

  /**
   * Left is the leftmost inorder index of the current tree Right is the
 *   rightmost inorder index of the current tree
   * 
   * So if left is 2 and right is 4, that means the current tree must be more
 *   than in indexes 2,3, and 4 of the inorder array.
   * 
  */
	const arrayToTree = (leftmostInorderIdx, rightmostInorderIdx) => {
		if (leftmostInorderIdx > rightmostInorderIdx) return null;

		const rootVal = preorder[preorderIndex];
		preorderIndex += 1;

		const root = new TreeNode(rootVal);
		root.left = arrayToTree(leftmostInorderIdx, map.get(rootVal) - 1);
		root.right = arrayToTree(map.get(rootVal) + 1, rightmostInorderIdx);

		return root;
	};

	return arrayToTree(0, preorder.length - 1);
};
