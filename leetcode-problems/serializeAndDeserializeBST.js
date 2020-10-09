/* Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Example:
Input: root = [2,1,3]
Output: [2,1,3]

Example:
Input: root = []
Output: []

*/

const serialize = (root) => {
  if (!root) return '';
  let serialized = "";

  // const recurse = (node) => {
  //   serialized += String(node.val) + ", ";
  //   if (!node.left && !node.right) {
  //     return;
  //   }

  //   if (node.left) recurse(node.left);
  //   if (node.right) recurse(node.right);
  // }

  // recurse(root);
  // return serialized;

  const values = [];
  const queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();
    values.push(current.val);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return values.toString(',');
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let tree = new TreeNode(2);
// tree.left = new TreeNode(1);
// tree.right = new TreeNode(3);

const deserialize = (data) => {
  // const array = data.split(",").map(n => +n)
  // const tree = new TreeNode(+(array[0]));
  // const recurse = (currentTree, current, previous, index) => {
  //   if (current < previous) {
  //     currentTree.left = current;
  //   }
  //   for (let i = index; i < array.length; i += 1) {
  //     const nextTree = new TreeNode(array[i + 1]);
  //     recurse(nextTree, array[i + 1], )
  //   }
  // }

  if (data.length === 0) return null;
  let values = data.split(',');
  let root = new TreeNode(values[0]);
  const addNode = (node, value) => {
    if (value < node.val) {
      if (node.left) {
        addNode(node.left, value);
      } else {
        node.left = new TreeNode(value);
      }
    }
    if (value > node.val) {
      if (node.right) {
        addNode(node.right, value);
      } else {
        node.right = new TreeNode(value);
      }
    }
  }
  for (let i = 1; i < values.length; i += 1) {
    addNode(root, +values[i]);
  }
  return root;
}