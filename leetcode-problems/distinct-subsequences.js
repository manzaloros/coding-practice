let numDistinctMine = function (s, t) {
  let count = 0;

  const dfs = (positionS, positionT) => {
    if (positionT >= t.length) {
      count += 1;
    } else {
      for (let i = positionS; i < s.length; i += 1) {
        if (s[i] === t[positionT]) dfs(i + 1, positionT + 1);
      }
    }
  };

  dfs(0, 0);

  return count;
};

const numDistinct = (s, t) => {
  const memo = new Map();

  const recurse = (i, j) => {
    if (i === s.length || j === t.length || s.length - i < t.length - j) {
      return j === t.length ? 1 : 0;
    }

    const key = `${i}:${j}`;
    if (memo.has(key)) return memo.get(key);

    let ans = recurse(i + 1, j);

    if (s[i] === t[j]) ans += recurse(i + 1, j + 1);

    memo.set(key, ans);

    return ans;
  };

  return recurse(0, 0);
};

// numDistinct('babgbag', 'bag');
numDistinct('rabbbit', 'rabbit');
