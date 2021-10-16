let maxProfit = function (prices) {
  const memo = new Map();

  const backtrack = (index, canBuy) => {
    if (index >= prices.length) return 0;
    const curr = prices[index];

    const key = `${index}:${canBuy}`;
    if (memo.has(key)) return memo.get(key);

    let winner = backtrack(index + 1, canBuy);

    if (canBuy) {
      winner = Math.max(winner, backtrack(index + 1, false) - curr);
    } else {
      winner = Math.max(winner, backtrack(index + 2, true) + curr);
    }

    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, true);
};

maxProfit([1, 2, 3, 0, 2]); // 3
// maxProfit([1, 2, 3, 4, 5]); // 4
