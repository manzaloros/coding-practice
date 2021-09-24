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
// Mine. Time Limit Exceeded
/* const maxPathSum = (root) => {
  // make adj list
  const graph = new Map();
  const makeGraph = (node) => {
    if (!graph.has(node)) graph.set(node, []);
    const { left, right } = node;

    if (left) {
      if (!graph.has(left)) graph.set(left, []);
      graph.get(left).push(node);
      graph.get(node).push(left);
      makeGraph(left);
    }

    if (right) {
      if (!graph.has(right)) graph.set(right, []);
      graph.get(node).push(right);
      graph.get(right).push(node);
      makeGraph(right);
    }
  };
  makeGraph(root);

  let maxPathSum = -Infinity;

  // find max path
  const findPaths = (node, seen, pathSum) => {
    if (seen.has(node)) return;
    seen.add(node);

    // add node val to path sum
    pathSum += node.val;
    maxPathSum = Math.max(maxPathSum, pathSum);

    // for each neighbor
    // findPaths on neighbor
    graph.get(node).forEach((neighbor) => {
      findPaths(neighbor, seen, pathSum);
    });

    seen.delete(node);
  };

  // for each node in adj list
  // find max path
  graph.forEach((neighbors, node) => {
    findPaths(node, new Set(), 0);
  });

  return maxPathSum;
};
 */

// Check this: https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/603423/Python-Recursion-stack-thinking-process-diagram
const maxPathSum = (root) => {
  let max = -Infinity;

  const getMax = (node) => {
    if (!node) return 0;

    let gainLeft = Math.max(getMax(node.left), 0);
    let gainRight = Math.max(getMax(node.right), 0);

    let currMax = node.val + gainLeft + gainRight;
    max = Math.max(max, currMax);

    return node.val + Math.max(gainLeft, gainRight);
  };

  getMax(root);

  return max;
};

const b = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

const tree = {
  val: -10,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left:
    { val: 15, left: null, right: null },
    right:
    { val: 7, left: null, right: null },
  },
};

const oneNode = { val: 1, left: null, right: null };

const t = {
  val: 0,
  left: { val: 1, left: null, right: null },
  right: { val: 1, left: null, right: null },
};

maxPathSum(t);
