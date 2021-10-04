let binaryTreePaths = function (root) {
  const result = [];

  const dfs = ({ left, right, val }, path) => {
    if (!left && !right) return result.push(path);

    if (left) dfs(left, `${path}->${left.val}`);
    if (right) dfs(right, `${path}->${right.val}`);
  };

  dfs(root, `${root.val}`);

  return result;
};

const binaryTreePathsIterativeDFS = (root) => {
  const stack = [[root, `${root.val}`]];
  const result = [];

  while (stack.length > 0) {
    let [{ left, right, val }, path] = stack.pop();

    if (!right && !left) result.push(path);

    if (left) stack.push([left, `${path}->${left.val}`]);
    if (right) stack.push([right, `${path}->${right.val}`]);
  }

  return result;
};
