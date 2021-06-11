/* Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [2,1]
Example 5:

Input: root = [1,null,2]
Output: [1,2]

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively? */
/*
Time: O(n)
Space: O(n)
*/
const inorderTraversal = (root, result = []) => {
  if (root) {
    if (root.left) result.concat(inorderTraversal(root.left, result));
    result.push(root.val);
    if (root.right) result.concat(inorderTraversal(root.right, result));
  }
  return result;
};

const inorderTraversalIterative = (root) => {
  const result = [];
  if (root) {
    const stack = [root];
    let current = root;
    while (current || stack.length > 0) {
      // If on a leaf node , this while loop is skipped
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }
  return result;
};

const inorderTraversalMorris = (root) => {

};
