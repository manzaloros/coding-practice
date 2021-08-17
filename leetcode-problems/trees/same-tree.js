let isSameTreeRecursive = (p, q) => {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;

  return isSameTreeRecursive(p.left, q.left) && isSameTreeRecursive(p.right, q.right);
};

const check = (p, q) => {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;
  return true;
};

// Iterative Version

// O (number of tree nodes in p or q)
// O(size of largest layer of trees) queue
let isSameTree = function (p, q) {
  if (p === null && q === null) return true;

  const queue = [[p, q]];

  while (queue.length > 0) {
    let [currP, currQ] = queue.shift();

    if (!check(currP, currQ)) return false;

    if (currP) {
      queue.push([currP.left, currQ.left]);
      queue.push([currP.right, currQ.right]);
    }
  }

  return true;
};
