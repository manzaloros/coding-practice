let levelOrder = (root) => {
  const levels = [];
  if (!root) return levels;

  let previousLevel = [root];

  while (previousLevel.length > 0) {
    const previousVals = [];
    const currentLevel = [];

    // Iterate over queue
    previousLevel.forEach(({ val, children }) => {
      previousVals.push(val);

      // Populate the next level (currentLevel) with the children of every node
      // in the queue
      children.forEach((child) => currentLevel.push(child));
    });

    levels.push(previousVals);
    previousLevel = currentLevel;
  }

  return levels;
};
