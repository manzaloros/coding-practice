/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
  let lca;

  const dfs = (node) => {
    if (!node) return 0;

    const { left, right, val } = node;

    const rootMatch = val === p.val || val === q.val ? 1 : 0;

    const leftMatch = dfs(left);
    const rightMatch = dfs(right);

    if (!lca && (leftMatch + rightMatch + rootMatch) === 2) lca = node;

    return rootMatch + leftMatch + rightMatch;
  };

  dfs(root);

  return lca;
};
