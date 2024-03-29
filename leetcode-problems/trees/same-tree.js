let isSameTreeRecursive = (p, q) => {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;

  return isSameTreeRecursive(p.left, q.left) && isSameTreeRecursive(p.right, q.right);
};

const check = (p, q) => {
  if (!p && !q) return true;

  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return true;
};

const isSameTree = (p, q) => {
  if (!p && !q) return true;

  // if (!p || !q) return false;

  // if (p.val !== q.val) return false;

  // Make sure to push an ARRAY of p and q
  const stack = [[p, q]];

  while (stack.length > 0) {
    const [currP, currQ] = stack.pop();

    // Could abstract the conditional to a method
    // if (!currP || !currQ) return false;

    // if (currP && currQ) {
    // if (currP.val !== currQ.val) return false;

    if (check(currP, currQ)) {
      if (currP && currQ) {
        stack.push([currP.left, currQ.left]);
        stack.push([currP.right, currQ.right]);
      }
    } else {
      return false;
    }
    // }
  }

  return true;
};
