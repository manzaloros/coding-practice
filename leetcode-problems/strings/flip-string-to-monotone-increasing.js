/**
 * @param {string} s
 * @return {number}
 */
let minFlipsMonoIncr = (string) => {
  const memo = new Map();

  const backtrack = (index, lastChar) => {
    if (index === string.length) return 0;

    const key = `${index}:${lastChar}`;
    if (memo.has(key)) return memo.get(key);

    let flip;
    let notFlip;

    const current = +string[index];
    let flipped = current === 1 ? 0 : 1;

    if (lastChar === 1 && current === 1) {
      flip = Infinity;
    } else {
      flip = 1 + backtrack(index + 1, flipped);
    }

    if (current === 0 && lastChar === 1) {
      notFlip = Infinity;
    } else {
      notFlip = backtrack(index + 1, current);
    }

    const winner = Math.min(flip, notFlip);
    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, 0);
};

minFlipsMonoIncr('00110');
