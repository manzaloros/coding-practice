// O(coins.length) space
// O(coins.length * amount) time
let coinChangeMine = function (coins, amount) {
  // Not needed:
  // coins.sort((a, b) => (a < b ? 1 : -1));
  const memo = new Map();

  const backtrack = (index, remaining) => {
    if (remaining < 0 || index >= coins.length) return Infinity;
    if (remaining === 0) return 0;

    const key = `${index}:${remaining}`;
    if (memo.has(key)) return memo.get(key);

    let use = backtrack(index, remaining - coins[index]);
    use = use === -1 ? Infinity : use + 1;

    let dont = backtrack(index + 1, remaining);
    dont = dont === -1 ? Infinity : dont;

    let winner = Math.min(use, dont);
    winner = winner === Infinity ? -1 : winner;

    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, amount);
};

const coinChangeBFS = (coins, amount) => {
  const queue = [amount];
  const seen = new Set();
  let steps = 0;

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      size -= 1;
      const curr = queue.shift();

      if (curr === 0) return steps;

      coins.forEach((coin) => {
        if (curr - coin >= 0 && !seen.has(curr - coin)) {
          queue.push(curr - coin);
          seen.add(curr - coin);
        }
      });
    }

    steps += 1;
  }

  return -1;
};

coinChangeBFS([1, 2, 5], 11);
// coinChange([2], 3);
// coinChange([1], 1);
// coinChange([1], 2);
