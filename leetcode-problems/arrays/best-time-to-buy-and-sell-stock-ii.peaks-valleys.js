/**
 * O(1) space, O(N) time
 *            D
 *     B     /
 *    /\    /
 *   /  \  /
 *  /    \/
 * /      C
 * A
 * 
 * 
 * Buying A, then selling at B, then buying C, and selling at D will always be better than:
 * 
 * Buying A, then Selling at D. Because the journey from A to B and C is greater than the total distance between A and D
 */
const maxProfit = (prices) => {
	let profit = 0;

	for (let i = 0; i < prices.length; i += 1) {
		if (prices[i] > prices[i - 1]) {
			profit += prices[i] - prices[i - 1]; // selling every chance you get
		}
	}

	return profit;
};

/* 
  Example: 7,1,5,3,6,4

  Buy day 2 when price is 1, sell next day when price is 5.

  Buy day 4 when price is 3, sell next day when price is 6.

  (5-1) + (6-3) = 7.
*/