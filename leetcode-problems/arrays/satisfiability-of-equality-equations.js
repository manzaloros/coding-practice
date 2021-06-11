/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = (equations) => {
  /*
   Map each variable to an index
 */
  const vars = new Map();
  let j = 0;
  for (let i = 0; i < equations.length; i += 1) {
    const curr = equations[i];
    const first = curr[0];
    const second = curr[3];
    if (!vars.has(first)) {
      vars.set(first, j);
      j += 1;
    }
    if (!vars.has(second)) {
      vars.set(second, j);
      j += 1;
    }
  }

  /*
   Union Find boilerplate
 */
  // Space: O(n)
  const parent = Array(j).fill(0).map((v, i) => i);
  const rank = Array(j).fill(0);

  // O(log*n) or ~O(1) for repeated calls
  const find = (i) => {
    if (parent[i] !== i) parent[i] = find(parent[i]);

    return parent[i];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
      } else {
        parent[rootY] = rootX;
        rank[rootX] += 1;
      }
    }
  };

  /*
   Add any non-equals equations to a stack to check later
   and union all connected variables
 */
  const notEqualsStack = [];

  for (let i = 0; i < equations.length; i += 1) {
    const curr = equations[i];
    const equals = curr[1] === '=';
    const first = curr[0];
    const second = curr[3];

    if (equals) {
      union(vars.get(first), vars.get(second));
    } else {
      notEqualsStack.push(curr);
    }
  }

  /*
   If you find that a not-equals equation shares a root with another variable,
   you know the list of equations is invalid
 */
  while (notEqualsStack.length > 0) {
    const curr = notEqualsStack.pop();
    const first = curr[0];
    const second = curr[3];

    if (find(vars.get(first)) === find(vars.get(second))) return false;
  }

  return true;
};

// equationsPossible(['c==c', 'b==d', 'x!=z']);
equationsPossible(['b==a', 'a==b']);
