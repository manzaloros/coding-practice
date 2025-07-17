/**
 * Given two strings s and t of lengths m and n respectively, return the minimum
 * window substring of s such that every character in t (including duplicates)
 * is included in the window. If there is no such substring, return the empty
 * string "".
 *
 * Example: 
 * 
 * Input: s = "ADOBECODEBANC", t = "ABC" 
 *
 * Output: "BANC"
 */
export const minWindow = (s, t) => {
	/**
	 * Frequency of t characters NOT in the current window.
	 */
	const freq = {};
	for (const char of t) {
		freq[char] = (freq[char] || 0) + 1;
	}

	let end = 0;
	let start = 0;
	let count = 0; // number of characters from t that have been matched so far, including duplicates
	/**
	 * Use startIndex and the min length to actually return the substring at the
	 * end
	 */
	let minLen = Number.POSITIVE_INFINITY;
	let startIndex = -1; // start index of the minimum window

	for (end = 0; end < s.length; end += 1) {
		const rightChar = s[end];
		if (rightChar in freq) { // use 'in' operator
			freq[rightChar] -= 1;
			if (freq[rightChar] >= 0) count += 1;
		}

		while (count === t.length && start <= end) {
			const windowSize = end - start + 1
			if (windowSize < minLen) {
				minLen = windowSize;
				startIndex = start; // only time we change the start index
			}

			const leftChar = s[start];
			if (leftChar in freq) {
				freq[leftChar] += 1;
				if (freq[leftChar] > 0) count -= 1; // decrement matched characters if we lost one in the current window
			}
			start += 1;
		}
	}

	return startIndex === -1 ? "" : s.substring(startIndex, startIndex + minLen);
};
