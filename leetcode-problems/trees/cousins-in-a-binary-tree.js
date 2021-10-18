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
 * @param {number} x
 * @param {number} y
 * @return {boolean}

 NOT siblings.
 Cousins are same depth DIFF parent;
 root is depth 0.

 keep track of depth and parent val
 for each node, compare with all nodes' parent vals at that depth

 {parentval: {child vals}}
 0.     1.     2
 [{1}, {1: {2,3}}, {2: 4, 3: 5}]
 */
let isCousins = function (root, x, y) {
  const xInfo = {};
  const yInfo = {};

  const dfs = ({ left, right, val }, depth, parent) => {
    if (!xInfo.hasOwnProperty(depth) && !yInfo.hasOwnProperty(depth)) {
      if (val === x) {
        xInfo.depth = depth;
        xInfo.parent = parent;
      }
      if (val === y) {
        yInfo.depth = depth;
        yInfo.parent = parent;
      }

      if (left) dfs(left, depth + 1, val);
      if (right) dfs(right, depth + 1, val);
    }
  };

  dfs(root, 0, -1);

  return xInfo.depth === yInfo.depth && xInfo.parent !== yInfo.parent;
};
