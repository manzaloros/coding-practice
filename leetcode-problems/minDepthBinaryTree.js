/* Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.



Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2


Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5


Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000 */

const minDepth = (root) => {
  // store minimum = infinity
  // recurse on node, depth = 1
  // current depth += 1
  // if the current node has no left or right
  // update depth if smallest
  // return
  // return recurse on node's left and right
  // invoke recurse on root
  // return minimum

  min = Infinity;
  const recurse = (node, depth = 1) => {
    if ((!node.left || !node.left.val) && (!node.right || !node.right.val)) {
      min = Math.min(min, depth);
      return;
    }
    depth += 1;
    recurse(node.left, depth);
    recurse(node.right, depth);
  }
  recurse(root);
  return min;
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

TreeNode.prototype.addChild = function (val) {
  const child = new TreeNode(val);

}

const tree = new TreeNode(2);
tree.left = null
tree.right = new TreeNode(3)
tree.left.left = null;
tree.left.right = new TreeNode(3)
tree.right.left = null
tree.right.right = new TreeNode(5)
console.log(minDepth(tree));
