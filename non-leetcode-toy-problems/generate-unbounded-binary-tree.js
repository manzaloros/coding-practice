const TreeNode = require('../leetcode-problems/TreeNode');

// Creates unbounded tree, not O(1)
const generate = () => {
  const root = new TreeNode(0);

  if (Math.random() > 0.5) {
    root.left = generate();
  }

  if (Math.random() > 0.5) {
    root.right = generate();
  }

  return root;
};

const tree = generate();
