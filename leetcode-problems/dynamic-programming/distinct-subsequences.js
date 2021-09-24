let numDistinct = function (s, t) {
  const memo = new Map();

  const backtrack = (i, j) => {
    if (j === t.length) return 1;
    if (i === s.length) return 0;

    const key = `${i}:${j}`;
    if (memo.has(key)) return memo.get(key);

    const add = s[i] === t[j] ? backtrack(i + 1, j + 1) : 0;
    const dont = backtrack(i + 1, j);

    memo.set(key, add + dont);
    return add + dont;
  };

  return backtrack(0, 0);
};

// numDistinct('rabbbit', 'rabbit');
numDistinct('babgbag', 'bag');
