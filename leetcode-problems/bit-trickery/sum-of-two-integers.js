/**
 * Uses pure bit manipulation to manage negative numbers.
 *
 * Secret to both of these solution is "^", the XOR, exclusive OR.
 *
 * 0 ^ 1 = 1.
 *
 * 1 ^ 1 = 0.
 *
 *     2^4 2^3 2^2 2^1 2^0
 * 15:  0   1   1   1   1  (8 + 4 + 2 + 1)
 * 2:   0   0   0   1   0
 * ---------------------- (XOR)
 *      0   1   1   0   1
 *
 * At this point, we're only missing the carry, which is where both numbers
 * share a bit in the same place, like (2^1). To find the carry, you find the common
 * bits (1 and 1) and shift it one place to the left, like (x & y) << 1. So,
 * the carry of (10 & 10) << 1 becomes 100 (in binary, which is the number 4 in decimal).
 *
 * Bitwise &:
 *
 * 1 & 1 = 1;
 *
 * 1 & 0, 0 & 0 both = 0
 */
var getSumBitManipulation = (a, b) => {
	while (b !== 0) {
		const nextCarry = a & b;
		console.log({ nextCarry });
		a ^= b;
		b = nextCarry << 1;
	}

	return a;
};

/**
 * Uses multiplication to manage negative numbers
 */
const getSum = (a, b) => {
	let [x, y] = [Math.abs(a), Math.abs(b)];

	if (x < y) return getSum(b, a);

	const sign = a > 0 ? 1 : -1;

	if (a * b >= 0) {
		// x + y, x > y
		// while the carry isn't 0
		while (y !== 0) {
			const answer = x ^ y;
			const carry = (x & y) << 1;
			x = answer;
			y = carry;
		}
	} else {
		// x - y, x > y
		// while borrow is  not 0
		while (y !== 0) {
			const answer = x ^ y;
			const borrow = (~x & y) << 1;
			x = answer;
			y = borrow;
		}
	}

	return x * sign;
};

getSum(15, -2);
