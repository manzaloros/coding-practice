export const minWindow = (s, t) => {
	const freq = {};
	for (const char of t) {
		freq[char] = (freq[char] || 0) + 1;
	}

	let right = 0;
	let left = 0;
	let count = 0; // number of characters from t that have been matched so far, including duplicates
	let minLen = Number.POSITIVE_INFINITY;
	let startIndex = -1;

	for (right = 0; right < s.length; right += 1) {
		const rightChar = s[right];
		if (rightChar in freq) { // use 'in' operator
			freq[rightChar] -= 1;
			if (freq[rightChar] >= 0) count += 1;
		}

		while (count === t.length && left <= right) {
			if (right - left + 1 < minLen) {
				minLen = right - left + 1;
				startIndex = left; // only time we change the start index
			}

			const leftChar = s[left];
			if (leftChar in freq) {
				freq[leftChar] += 1;
				if (freq[leftChar] > 0) count -= 1;
			}
			left += 1;
		}
	}

	return startIndex === -1 ? "" : s.substring(startIndex, startIndex + minLen);
};
