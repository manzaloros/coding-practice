const coinChangeDpExplained = (coins, amount) => {
	const max = amount + 1;

	/**
      The minimum number of coins needed to make
      the amount i.
     */
	const dp = Array(max).fill(max);
	dp[0] = 0; // Can't have any amount of coins to make the amount 0.

	for (
		let currTargetAmount = 1;
		currTargetAmount <= amount;
		currTargetAmount += 1
	) {
		for (const coin of coins) {
			// if the current coin can be used for the current amount
			if (coin <= currTargetAmount) {
				const minNumCoinsToMakeTarget = dp[currTargetAmount];
				const useCurrCoinForAmount = dp[currTargetAmount - coin] + 1;

				dp[currTargetAmount] = Math.min(
					minNumCoinsToMakeTarget,
					useCurrCoinForAmount,
				);
			}
		}
	}
	return dp[amount] > amount ? -1 : dp[amount];
};

coinChangeDpExplained([2], 3);
