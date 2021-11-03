const TreeNode = require('../TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 [[1], [2,3], [1,5]]

 1 + 5 + 20 + 30 + 100

      1    -> * 100
    2   3  -> * 10
   1        -> * 1
     5
     121? + 1215 + 13

   f(root, path)
     if no right and left
       add numberfied path to total sum
     otherwise
       f(root.left, path += root.val)
 */
let sumNumbers = function (root) {
  let sum = 0;

  const dfs = ({ left, right, val }, path) => {
    path += String(val);

    if (!left && !right) {
      sum += +path;
    } else {
      if (left) dfs(left, path);
      if (right) dfs(right, path);
    }
  };

  dfs(root, '');

  return sum;
};

let sumNumbersWithNum = function (root) {
  let sum = 0;

  const dfs = ({ left, right, val }, currNum) => {
    currNum = currNum * 10 + val;

    if (!left && !right) {
      sum += currNum;
    } else {
      if (left) dfs(left, currNum);
      if (right) dfs(right, currNum);
    }
  };

  dfs(root, '');

  return sum;
};

const t = TreeNode.createFromArray([1, 2, 3]);
sumNumbers(t);
