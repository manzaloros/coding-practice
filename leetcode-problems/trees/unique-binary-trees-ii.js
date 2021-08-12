const TreeNode = require('../TreeNode');

const generateTrees = (n) => {
  const build = (start, end) => {
    const trees = [];

    // When you're at a leaf node
    if (start > end) {
      trees.push(null);
      return trees;
    }

    // for each num from 1 to n
    for (let i = start; i <= end; i += 1) {
      // all trees left of current
      const leftTrees = build(start, i - 1);

      // all trees right of current
      const rightTrees = build(i + 1, end);

      leftTrees.forEach((leftTree) => {
        rightTrees.forEach((rightTree) => {
          const currentTree = new TreeNode(i);

          currentTree.left = leftTree;
          currentTree.right = rightTree;

          trees.push(currentTree);
        });
      });
    }

    return trees;
  };

  return build(1, n);
};

generateTrees(2);
