/*
  no memo:
    time: O(2 ^ length) (exponential)
    space: O(length)

  memo:
    time: O(length)
    space: O(length)
*/
const maxProfit = (prices) => {
  const memo = new Map();

  const backtrack = (index, canBuy) => {
    if (index >= prices.length) return 0;

    const key = `${index}:${canBuy}`;
    if (memo.has(key)) return memo.get(key);

    const curr = prices[index];
    const dontBuy = backtrack(index + 1, canBuy);

    const buy = canBuy ? backtrack(index + 1, false) - curr : dontBuy;
    const sell = canBuy ? dontBuy : backtrack(index + 1, true) + curr;

    const winner = Math.max(buy, sell, 0);
    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, true);
};

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
