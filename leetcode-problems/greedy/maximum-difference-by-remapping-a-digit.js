/**
 * Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.
 *
 * Time: O(number of digits)
 * Space: O(number of digits)
 *
 * Scanning left to right:
 * Find the max number by remapping the first non-nine number to a 9.
 *
 * Find the min number by remapping the first digit to a 0, since we know that digit
 * can't be a zero.
 *
 * Then, subtract them
 */
const minMaxDifference1 = (num) => {
	const chars = String(num).split("");

	const firstNonNine = chars.find((c) => c !== "9");
	const firstNonZero = chars.find((c) => c !== "0");

	const max = chars.reduce((num, char) => {
		const curr = char === firstNonNine ? 9 : Number(char);

		return num * 10 + curr;
	}, 0);
	const min = chars.reduce((num, char) => {
		const curr = char === firstNonZero ? 0 : Number(char);

		return num * 10 + curr;
	}, 0);
	return max - min;
};

const minMaxDifference = (num) => {
	const digits = String(num).split("");

	const firstNonNineIdx = digits.findIndex((d) => d !== "9");
	const firstNonNineNum = digits[firstNonNineIdx];
	const max = Number(
		digits
			.map((d) => {
				if (d === firstNonNineNum) {
					return "9";
				}
				return d;
			})
			.join(""),
	);
	const firstDigit = digits[0];
	const min = Number(
		digits
			.map((d) => {
				if (d === firstDigit) {
					return "0";
				}
				return d;
			})
			.join(""),
	);

	return max - min;
};
