const coinChangeDP = (coins, amount) => {
  const memo = new Map();

  const backtrack = (index, left) => {
    if (left < 0 || index >= coins.length) return Infinity;
    if (left === 0) return 0;

    const key = `${index}:${left}`;
    if (memo.has(key)) return memo.get(key);

    let use = backtrack(index, left - coins[index]);
    use = use === -1 ? Infinity : use + 1;

    let dont = backtrack(index + 1, left);
    dont = dont === -1 ? Infinity : dont;

    let winner = Math.min(use, dont);
    winner = winner === Infinity ? -1 : winner;

    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, amount);
};

// Very slow
let coinChange = function (coins, amount) {
  const queue = [amount];
  const seen = new Set();
  let total = 0;

  const getNeighbors = (left) => coins.filter((coin) => (left - coin >= 0));

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      size -= 1;

      const left = queue.shift();
      if (left === 0) return total;

      if (!seen.has(left)) {
        seen.add(left);

        getNeighbors(left).forEach((neighbor) => {
          queue.push(left - neighbor);
        });
      }
    }

    total += 1;
  }

  return -1;
};

// O(coins.length * amount)
const coinChangeBetterDP = (coins, amount) => {
  const memo = new Map();

  const backtrack = (remaining) => {
    if (remaining < 0) return -1;
    if (remaining === 0) return 0;

    if (memo.has(remaining)) return memo.get(remaining);

    let min = Infinity;

    coins.forEach((coin) => {
      const result = backtrack(remaining - coin);

      if (result >= 0 && result < min) min = 1 + result;
    });

    const winner = min === Infinity ? -1 : min;

    memo.set(remaining, winner);

    return winner;
  };

  return backtrack(amount);
};

coinChangeBetterDP([1, 2, 5], 11);
