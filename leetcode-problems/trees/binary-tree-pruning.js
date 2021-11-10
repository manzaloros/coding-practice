const TreeNode = require('../TreeNode');

let pruneTree = function (root) {
  if (root) {
    const { left, right, val } = root;

    const zeroLeft = pruneTree(left);
    root.left = zeroLeft;

    const zeroRight = pruneTree(right);
    root.right = zeroRight;

    if (!zeroLeft && !zeroRight && val === 0) return null;
  }

  return root;
};

// const t = TreeNode.createFromArray([1, 0, 1, 0, 0, 0, 1]);
const t = TreeNode.createFromArray([0, null, 0, 0, 0]);
pruneTree(t);
