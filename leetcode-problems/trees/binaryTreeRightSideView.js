/*
Given a binary tree, imagine yourself standing on the right side of it, return
the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4] Output: [1, 3, 4] Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
  */

// BFS Breadth-First Search of Binary Tree
const rightSideView = (root) => {
  const queue = [];
  if (!root) return queue;
  const rightView = [];

  queue.push(root);

  while (queue.length > 0) {
    // number of nodes at current level
    const size = queue.length;
    let val = 0;

    // traverse all nodes at current level
    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();

      // when the loop ends, `val` will contain the last node's value at the
      // current level
      val = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    rightView.push(val);
  }
  return rightView;
};
