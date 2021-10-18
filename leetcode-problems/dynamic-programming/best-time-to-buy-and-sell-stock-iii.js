/*
  non memo:
    time: O(2^length)
    space: O(length) callstack

  memo:
    time: O(length * 2 * 1)
    space: O(length * 2 * 1) memo and callstack
*/
let maxProfit = function (prices) {
  const memo = new Map();

  const backtrack = (index, canBuy, transactions) => {
    if (index >= prices.length) return 0;

    const key = `${index}:${canBuy}:${transactions}`;
    if (memo.has(key)) return memo.get(key);

    let winner = backtrack(index + 1, canBuy, transactions);
    const curr = prices[index];

    if (transactions < 2) {
      if (canBuy) {
        const buy = backtrack(index + 1, false, transactions) - curr;
        winner = Math.max(buy, winner);
      } else {
        const sell = backtrack(index + 1, true, transactions + 1) + curr;
        winner = Math.max(sell, winner);
      }
    }

    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, true, 0);
};

maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
// maxProfit([1, 2, 3, 4, 5]);

// maxProfit([7, 6, 4, 3, 1]);
// maxProfit([1]);
