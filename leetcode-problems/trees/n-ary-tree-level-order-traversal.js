const levelOrder = (root) => {
  if (!root) return [];
  let currentLevelQueue = [root];
  let nextLevelQueue = [];
  const levels = [];

  while (currentLevelQueue.length > 0) {
    const level = [];

    while (currentLevelQueue.length > 0) {
      const current = currentLevelQueue.shift();
      level.push(current.val);

      current.children.forEach((child) => {
        nextLevelQueue.push(child);
      });
    }

    currentLevelQueue = nextLevelQueue;
    nextLevelQueue = [];

    levels.push(level);
  }

  return levels;
};

const levelOrderDFS = (root, currentLevel = 0, levels = []) => {
  if (!root) return [];

  if (!Array.isArray(levels[currentLevel])) levels[currentLevel] = [];
  levels[currentLevel].push(root.val);

  root.children.forEach((child) => {
    levelOrderDFS(child, currentLevel + 1, levels);
  });

  return levels;
};
