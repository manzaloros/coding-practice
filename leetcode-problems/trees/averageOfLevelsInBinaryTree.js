/* Average of Levels in Binary Tree
Given a non-empty binary tree, return the average value of the nodes on
each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is
14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer. */

const averageOfLevels = (root) => {
  const queue = [root];
  const averages = [];

  while (queue.length > 0) {
    let levelSum = 0;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i += 1) {
      const current = queue.shift();
      levelSum += current.val;
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    averages.push(levelSum / levelSize);
  }

  return averages;
};
