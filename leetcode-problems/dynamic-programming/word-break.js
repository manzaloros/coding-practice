/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}

  Memoized: 

    time: O(s.length * wordDict.length * averageLength of wordDict word.length) 

    space: O(s.length)

  Non memoized: 

    time: O(wordDict.length ^ s.length). You're making worst case
        wordDict.length calls to isValid (which is different than other
        backtracking top-down DP problems where you might make 2 calls, and the
        complexity would be 2^n).

    space: O(s.length)
 */
const wordBreak = (s, wordDict) => {
	const memo = new Map(); // tracks whether a valid solution can be found at each index
	const isValid = (i) => {
		if (i < 0) return true;
		if (memo.has(i)) return memo.get(i);
		for (const word of wordDict) {
			const { length } = word;
			if (i - length + 1 < 0) continue; // word is too long, skip it because it can't be a solution
			/**
              If the word is found in s ending on index i, 
              and using that word results in a valid solution, return true
             */
			if (s.substring(i - length + 1, i + 1) === word && isValid(i - length)) {
				memo.set(i, true);
				return true;
			}
			// if we haven't returned, we try the next word
		}
		/**
          We've exhausted every word and can't get a valid solution for this index.
         */
		memo.set(i, false);
		return false;
	};
	return isValid(s.length - 1); // start at last possible character
};
