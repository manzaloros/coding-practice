const TreeNode = require('../TreeNode');

const treeToDoublyList = (root) => {
  if (!root) return null;

  let first;
  let last;

  const helper = (node) => {
    if (node) {
      helper(node.left);

      if (last) {
        last.right = node;
        node.left = last;
      } else {
        first = node;
      }

      last = node;
      helper(node.right);
    }
  };

  helper(root);

  last.right = first;
  first.left = last;

  return first;
};

const t = TreeNode.createFromArray([4, 2, 5, 1, 3]);
TreeNode.printPreOrder(treeToDoublyList(t));
