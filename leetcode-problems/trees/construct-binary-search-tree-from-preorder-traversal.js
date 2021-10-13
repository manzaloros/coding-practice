/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}

 time: O(p.length)
 space:O(p.length) depth of callstack
 */
let bstFromPreorder = function (preorder) {
  let index = 0;

  const build = (lo, hi) => {
    const el = preorder[index];

    if (el >= lo && el <= hi) {
      const root = new TreeNode(el);
      index += 1;

      root.left = build(lo, el - 1);
      root.right = build(el + 1, hi);

      return root;
    }
    return null;
  };

  return build(-Infinity, Infinity);
};

const bstFromPreorderIterative = (p) => {
  const root = new TreeNode(p[0]);
  const stack = [root];

  p.forEach((num, i) => {
    if (i >= 1) {
      let node = queue[queue.length - 1];
      const child = new TreeNode(num);

      // While queue has items and the top of stack val is less than child
      // value, pop and make it the new node. You will end up with a node whose
      // val is < child val
      while (stack.length > 0 && stack[stack.length - 1].val < child.val) node = stack.pop();

      if (node.val < child.val) {
        node.right = child;
      } else {
        node.left = child;
      }

      stack.push(child);
    }
  });

  return root;
};
