/* Given an array of integers preorder, which represents the preorder traversal
of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with
the given requirements for the given test cases.

A binary search tree is a binary tree where for every node, any descendant of
Node.left has a value strictly less than Node.val, and any descendant of
Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first, then
traverses Node.left, then traverses Node.right.

Example 1:

Input: preorder = [8,5,1,7,10,12] Output: [8,5,10,1,7,null,12] Example 2:

Input: preorder = [1,3] Output: [1,null,3]

Constraints:

1 <= preorder.length <= 100 1 <= preorder[i] <= 108 All the values of preorder
are unique.
 */

/*
                  5
                3   7
              1 2  6
            [5, 3, 1, 2, 7 , 6]

                 2
                / \
                   3
              [2,null,3]

                 5
                  \
                   7
                  / \
                 6 . 8
                 [5,7,6,8]

                 4
                / \
               2 . 6
                    \
                     8
              [4,2,6,8]

            Don't think this works, guess only for heaps:
            3's children: 2 * (1) = 2 and 2 * (1) + 1 = 3
            7's: 2 * 4 = 8, 2 * 4 + 1 = 9

*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const bstFromPreorder = (preorder) => {
  // index is global so it's always increasing, not just in recursion
  let index = 0;

  const build = (lowerLimit, upperLimit) => {
    if (preorder[index] > upperLimit || preorder[index] < lowerLimit) return null;
    if (index > preorder.length - 1) return null;

    const root = new TreeNode(preorder[index]);

    index += 1;
    root.left = build(lowerLimit, root.val);
    root.right = build(root.val, upperLimit);

    return root;
  };

  return build(-Infinity, Infinity);
};

/*
node: 3
lowerLimit: -Infinity
upperLimit: 3

node: 1
lowerLimit: -Infinity
upperLimit: 1

node: null
lowerLimit: -Infinity
upperLimit: null

return null
lowerLimit: -Infinity
upperLimit: null
*/

bstFromPreorder([5, 3, 1, null, 2, 7, 6]);
