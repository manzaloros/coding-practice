/**
 * @param {string} s
 * @return {number}
 single chars count as palindromes

 There are even-length  and odd-length palindromes

 O(n^2) time, O(1) space
 */
const countSubstrings = (s) => {
	let ans = 0;
	const { length } = s;

	const count = (left, right) => {
		let num = 0;

		while (left >= 0 && right < length && s[left] === s[right]) {
			num += 1;
			left -= 1;
			right += 1;
		}
		return num;
	};
	for (let i = 0; i < length; i += 1) {
		ans += count(i, i); // checks odd length
		ans += count(i, i + 1); // checks even length
	}

	return ans;
};
