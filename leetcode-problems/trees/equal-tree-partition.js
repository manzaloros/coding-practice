const checkEqualTree = (root) => {
  const seen = [];

  const sum = (node) => {
    if (!node) return 0;

    const leftSum = sum(node.left);
    const rightSum = sum(node.right);
    const rootSum = node.val;

    const sumTogether = leftSum + rightSum + rootSum;

    // Postorder adding of values together
    seen.push(sumTogether);

    return sumTogether;
  };

  sum(root);

  // Make sure not to count the root of the tree in the total values later
  const total = seen.pop();

  // Can only equally partition the tree if the total sum is even
  // Look at each (node + left children sum + right children sum) to see if it
  // is half the value of total. Return if true!
  return seen.map((val) => val === (total / 2))
    .reduce((a, b) => a || b, 0);
};
