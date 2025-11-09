/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// non-memoized TC: O(2^length of shortest string)
// memoized: TC: O(text1 * text2)
// SC: O(text1 * text2) for memo.
const longestCommonSubsequence = (text1, text2) => {
	const memo = new Map();

	const backtrack = (i, j) => {
		if (i === text1.length || j === text2.length) return 0;
		const key = `${i}:${j}`;

		if (memo.has(key)) return memo.get(key);

		let match = 0;
		let winner = 0;

		if (text1[i] === text2[j]) {
			match = 1 + backtrack(i + 1, j + 1);
		} else {
			const checkI = backtrack(i + 1, j);
			const checkJ = backtrack(i, j + 1);

			winner = Math.max(checkI, checkJ);
		}

		const longestSoFar = winner + match;
		memo.set(key, longestSoFar);

		return longestSoFar;
	};

	return backtrack(0, 0);
};

const longestCommonSubsequenceBackwards = (text1, text2) => {
	const memo = {};
	/**
      time: non memo: O(2^(n*m)), memo: O(n*m)
      space: non memo: O(2^(n*m)), memo: O(n*m)
     */
	const backtrack = (i, j) => {
		const key = `${i}:${j}`;
		if (i < 0 || j < 0) return 0;
		if (key in memo) return memo[key];
		let result;
		if (text1[i] === text2[j]) {
			// add to the subsequence since it matches
			result = 1 + Math.max(backtrack(i - 1, j - 1));
			memo[key] = result;
			return result;
		}

		// try moving each index back separaetly
		result = Math.max(backtrack(i - 1, j), backtrack(i, j - 1));
		memo[key] = result;
		return result;
	};

	return backtrack(text1.length - 1, text2.length - 1);
};
