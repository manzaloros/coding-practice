export const characterReplacement = (s, k) => {
	let mostFreqCharFreq = 0;

	let [left, right] = [0,0];
	let maxLength = 0;
	const windowSize = () => right - left + 1;
	const map = {};

	for (; right < s.length; right += 1) {
		const rightChar = s[right];
		map[rightChar] = (map[rightChar] || 0) + 1;

		mostFreqCharFreq = Math.max(mostFreqCharFreq, map[rightChar]);

		while (windowSize() - mostFreqCharFreq > k) {
			const leftChar = s[left];
			map[leftChar] -= 1;
			left += 1;
		}
		maxLength = Math.max(maxLength, windowSize());
	}

	return maxLength;
};

characterReplacement("AABABBA", 1) // should be 4