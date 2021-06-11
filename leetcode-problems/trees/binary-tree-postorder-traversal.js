/* Given the root of a binary tree, return the postorder traversal of its nodes'
values.

Example 1:

Input: root = [1,null,2,3] Output: [3,2,1] Example 2:

Input: root = [] Output: [] Example 3:

Input: root = [1] Output: [1] Example 4:

Input: root = [1,2] Output: [2,1] Example 5:

Input: root = [1,null,2] Output: [2,1]

Constraints:

The number of the nodes in the tree is in the range [0, 100].  -100 <= Node.val
<= 100

Follow up: Recursive solution is trivial, could you do it iteratively? */

const postorderTraversal = (root) => {
  const result = [];

  let current = root;
  const stack = [];
  let lastVisited = null;

  while (current || stack.length > 0) {
    // Traverse left side
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      // peek top of stack
      const { right, val } = stack[stack.length - 1];

      if (right && right !== lastVisited) {
        // We have visited both the left and the right
        current = right;
      } else {
        // top of stack is a leaf node
        result.push(val);
        lastVisited = stack.pop();
      }
    }
  }

  return result;
};

const postorderTraversalRecursive = (root, result = []) => {
  if (root) {
    if (root.left) result.concat(postorderTraversalRecursive(root.left, result));
    if (root.right) result.concat(postorderTraversalRecursive(root.right, result));

    result.push(root.val);
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
console.log(postorderTraversal(tree));
