const TreeNode = require('../TreeNode');

let inorderSuccessor = function (root, p) {
  let pFound = false;
  let ans = null;

  const dfs = (node) => {
    if (node && !ans) {
      dfs(node.left);
      if (pFound && !ans) ans = node;
      if (node === p) pFound = true;
      dfs(node.right);
    }
  };

  dfs(root);

  return ans;
};

const inorderSuccessorBSTProps = (root, p) => {
  let result = null;

  while (root) {
    if (p.val >= root.val) {
      root = root.right;
    } else {
      result = root;
      root = root.left;
    }
  }

  return result;
};

const t = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
inorderSuccessor(t, 1);
