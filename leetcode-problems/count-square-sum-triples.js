/**
 * @param {number} n
 * @return {number}
 * Find all combinations of A and B
 * 
 * Then, find C by a^2 + b^2, and get square root of C
 * 
 * if C is an integer and it's less than n, increment the count
 * 
 * O(n^2)
 */
const countTriples = (n) => {
	let count = 0;
	for (let a = 1; a <= n; a += 1) {
		for (let b = 1; b <= n; b += 1) {
			const cSquared = a * a + b * b;
			const c = Math.sqrt(cSquared);
			if (Number.isInteger(c) && c <= n) {
				count++;
			}
		}
	}
	return count;
};
