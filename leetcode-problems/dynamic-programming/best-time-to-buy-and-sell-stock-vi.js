/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 i
 2 4 1, k= 2

 b(0, t, 2)
   buy: b(1, f, 1) - 2
          sell: b(2, t, 1) + 4
             b(3) = 0

 non-memo:
 2^prices.length

 memo: O(length * k)
 space: O(length * k) memo
 */
let maxProfit = function (k, prices) {
  const memo = new Map();

  const backtrack = (index, canBuy, kLeft) => {
    if (index >= prices.length) return 0;

    const key = `${index}:${canBuy}:${kLeft}`;
    if (memo.has(key)) return memo.get(key);

    let result = backtrack(index + 1, canBuy, kLeft);
    const curr = prices[index];

    if (canBuy) {
      const buy = kLeft <= 0 ? -Infinity : backtrack(index + 1, false, kLeft) - curr;
      result = Math.max(result, buy);
    } else {
      const sell = backtrack(index + 1, true, kLeft - 1) + curr;
      result = Math.max(result, sell);
    }

    memo.set(key, result);

    return result;
  };

  return backtrack(0, true, k);
};

maxProfit(1, [3, 2, 6, 5, 0, 3]);
