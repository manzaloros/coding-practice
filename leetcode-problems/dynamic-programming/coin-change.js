/**
 *
 * For each amount up to the target amount, for each each coin, check if the
 * coin value can be used to make the amount (it has to be <= the amount).
 *
 * If it can, set the current number of coins needed for the target amount to be
 * the lesser of the current value or the stored value at the target - current
 * coin value + 1.
 */
const coinChangeDpExplained = (coinDenominations, targetAmount) => {
	const impossible = targetAmount + 1;

	/**
	 * dp[amt] = minimum number of coins needed to make amount `amt`.
	 * Initialized to "impossible" so any real solution will be smaller.
	 */
	const minCoinsForAmount = Array(impossible).fill(impossible);
	minCoinsForAmount[0] = 0; // Takes 0 coins to make amount 0.

	for (let amt = 1; amt <= targetAmount; amt += 1) {
		for (const coinValue of coinDenominations) {
			// if we can actually use the coin to make the amount
			if (coinValue <= amt) {
				const withoutCoin = minCoinsForAmount[amt]; // best so far
				const withCoin = minCoinsForAmount[amt - coinValue] + 1; // take coinValue, add 1 coin
				minCoinsForAmount[amt] = Math.min(withoutCoin, withCoin);
			}
		}
	}

	return minCoinsForAmount[targetAmount] > targetAmount
		? -1
		: minCoinsForAmount[targetAmount];
};

// O(coins.length) space
// O(coins.length * amount) time
const coinChangeMine = (coins, amount) => {
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
