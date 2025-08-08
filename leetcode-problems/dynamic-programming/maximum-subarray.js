/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArrayBottomUp = (nums) => {
	let curr = nums[0];
	let max = nums[0];

	nums.forEach((num, i) => {
		if (i > 0) {
			// What's bigger: starting a new subarray with the curr num, or adding the
			// curr num to your older subarray?
			curr = Math.max(num, curr + num);
			// What's bigger, the max subarray you've seen so far, or your current subarray?
			max = Math.max(max, curr);
		}
	});

	return max;
};

maxSubArrayBottomUp([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/**
 * Top-down
 * 
 * Space: O(n) for call stack
 * Time: O(n)
 */
const maxSubArray = (nums) => {
	let maxSum = -Infinity;
	const recurse = (index) => {
		if (index >= nums.length) return 0;
		const curr = nums[index];

		const next = recurse(index + 1);
		const best = Math.max(curr, curr + next);

		maxSum = Math.max(maxSum, best);

		return best;
	};

	recurse(0);

	return maxSum;
};