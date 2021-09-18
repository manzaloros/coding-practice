let levelOrder = function (root) {
  if (!root) return [];
  let nextLevelQ = [];
  let prevLevelQ = [root];

  const levels = [];

  while (prevLevelQ.length > 0) {
    const level = [];
    while (prevLevelQ.length > 0) {
      const current = prevLevelQ.shift();

      level.push(current.val);
      if (current.left) nextLevelQ.push(current.left);
      if (current.right) nextLevelQ.push(current.right);
    }

    levels.push(level);
    prevLevelQ = nextLevelQ;
    nextLevelQ = [];
  }

  return levels;
};

let levelOrderRecursiveDFS = function (root) {
  const levels = [];

  const dfs = (node, level) => {
    if (node) {
      if (!Array.isArray(levels[level])) levels[level] = [];
      levels[level].push(node.val);

      if (node.left) dfs(node.left, level + 1);
      if (node.right) dfs(node.right, level + 1);
    }
  };

  dfs(root, 0);

  return levels;
};
