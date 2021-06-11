/* Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [1,2]
Example 5:

Input: root = [1,null,2]
Output: [1,2]

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively? */
/*
Time: O(number of nodes)
Space: O(number of levels)
*/
const preorderTraversal = (root, result = []) => {
  if (root) {
    result.push(root.val);
    if (root.left) result.concat(preorderTraversal(root.left, result));
    if (root.right) result.concat(preorderTraversal(root.right, result));
  }
  return result;
};

const preorderTraversalIterative = (root) => {
  const result = [];
  if (root) {
    const stack = [root];

    while (stack.length > 0) {
      const { val, left, right } = stack.pop();
      result.push(val);

      if (right) stack.push(right);
      if (left) stack.push(left);
    }
  }

  return result;
};

const preorderTraversalMorris = (root) => {
  const result = [];

  let node = root;

  while (node) {
    if (!node.left) {
      result.push(node.val);
      node = node.right;
    } else {
      let predecessor = node.left;
      while (predecessor.right && predecessor.right !== node) {
        predecessor = predecessor.right;
      }

      if (!predecessor.right) {
        result.push(node.val);
        predecessor.right = node;
        node = node.left;
      } else {
        predecessor.right = null;
        node = node.right;
      }
    }
  }

  return result;
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
console.log(preorderTraversalMorris(tree));
