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
 * @param {number} key
 * @return {TreeNode}

 dfs(node, isLeft, parent)
 if node
 if node val matches key and it isn't the root
 if this was a left child
   if node.left exists
     parent.left = node.left
     node.left.right = node.right
   otherwise
     parent.left = node.right
 otherwise,
   if node.left exists
     parent.right = node.left
     node.left.right = node.right
   otherwise
     parent.left = node.right

 if node val does'nt match key
   dfs(node.left, true, node)
   dfs(node.right, false, node)
 */
const deleteNode = function (root, key) {
  if (root) {
    const { left, right, val } = root;

    if (key < val) root.left = deleteNode(left, key);
    else if (key > val) root.right = deleteNode(right, key);
    else {
      if (!left && !right) return null;
      if (!left || !right) return left || right;

      let temp = left;
      while (temp.right) temp = temp.right;

      root.val = temp.val;
      root.left = deleteNode(left, temp.val);
    }
  }

  return root;
};
