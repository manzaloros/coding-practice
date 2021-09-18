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
  let preorderIndex = 0;
  let map = new Map();

  inorder.forEach((element, index) => {
    map.set(element, index);
  });

  const arrayToTree = (left, right) => {
    if (left > right) return null;

    let rootVal = preorder[preorderIndex];
    preorderIndex += 1;

    const root = new TreeNode(rootVal);
    root.left = arrayToTree(left, map.get(rootVal) - 1);
    root.right = arrayToTree(map.get(rootVal) + 1, right);

    return root;
  };

  return arrayToTree(0, preorder.length - 1);
};
