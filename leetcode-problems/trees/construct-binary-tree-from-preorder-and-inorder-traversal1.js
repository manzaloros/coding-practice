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
let buildTree = function (preorder, inorder) {
  let index = 0;

  const map = inorder.reduce((acc, curr, i) => {
    acc.set(curr, i);
    return acc;
  }, new Map());

  const recurse = (left, right) => {
    if (left > right) return null;

    const val = preorder[index];
    index += 1;

    const root = new TreeNode(val);

    const rootIndex = map.get(val);
    root.left = recurse(left, rootIndex - 1);
    root.right = recurse(rootIndex + 1, right);

    return root;
  };

  return recurse(0, preorder.length - 1);
};
