/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).



Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.


Constraints:

0 <= k <= 109
0 <= prices.length <= 104
0 <= prices[i] <= 1000 */

// DP bottom up?
const maxProfit = (k, prices) => {
  const n = prices.length;
  if (n <= 1) return 0;
  k = Math.min(k, Math.floor(n / 2));
  const dp = new Array(n).fill(0);
  for (let i = 0; i < k; i += 1) {
    let val = 0;
    for (let j = 1; j < n; j += 1) {
      val = Math.max(dp[j], val + prices[j] - prices[j - 1]);
      dp[j] = Math.max(dp[j - 1], val);
    }
  }
  return dp[n - 1];
}

// Dp faster solution:
var maxProfit = function (k, prices) {

  if (k * 2 >= prices.length) {
    // try to seel every time
    let ret = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) ret += (prices[i] - prices[i - 1]);
    }
    return ret;
  }

  // DP init
  const buy = new Array(k + 1).fill(-Number.MAX_VALUE)
  const sell = new Array(k + 1).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]); // buy at the time
      sell[j] = Math.max(sell[j], buy[j] + prices[i]); // sell at the time
    }
  }
  // console.log( buy, sell );
  return sell[k];

};

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))