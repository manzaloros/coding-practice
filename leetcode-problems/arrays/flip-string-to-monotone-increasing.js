// Non memoized: O(2^n)
// Memoized: O(length of string * 2 (choice of 1 or 0))
const minFlipsMonoIncr = (s) => {
  const memo = new Map();

  const backtrack = (index, last) => {
    if (index === s.length) {
      return 0;
    }
    const currentBit = +s[index];

    const key = `${index}:${last}`;
    if (memo.has(key)) return memo.get(key);

    const dFlipped = currentBit === 1 ? 0 : 1;

    const candidates = [];
    // Only backtrack if condition will be met (won't backtrack is current is 0
    // and prev were 1s)
    if (dFlipped >= last) candidates.push(1 + backtrack(index + 1, dFlipped));

    if (currentBit >= last) candidates.push(backtrack(index + 1, currentBit));

    const winner = Math.min(...candidates);

    memo.set(key, winner);
    return winner;
  };

  return backtrack(0, 0);
};
