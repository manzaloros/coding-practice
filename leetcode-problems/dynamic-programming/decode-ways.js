let numDecodings = function (s) {
  const ACode = 'A'.charCodeAt(0);
  const ZCode = 'Z'.charCodeAt(0);

  const isValid = (num) => num >= 1 && num <= 26;

  const memo = new Set();

  const backtrack = (i) => {
    const char = +s[i];
    const twoDigits = +`${char}${s[i + 1]}`;

    if (memo.has(i)) return memo.get(i);

    if (char === 0) return 0;

    if (i >= s.length - 1) {
      return 1;
    }

    let ways = backtrack(i + 1);
    if (isValid(twoDigits)) ways += backtrack(i + 2);

    memo.set(i, ways);

    return ways;
  };

  return backtrack(0);
};

// numDecodings('11106');
numDecodings('226');
