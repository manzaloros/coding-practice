/**
 * Time: O(n)
 * Space: O(2n)
 * 
 * Uses two sets
 */
const longestConsecutive = (nums) => {
	const set = new Set(nums);
	let max = 0;
	const processed = new Set();

	set.forEach((item) => {
		let length = 1;
		let i = item + 1;
		let j = item - 1;
		while (set.has(i) && !processed.has(i)) {
			length += 1;
			processed.add(i);

			i += 1;
		}
		while (set.has(j) && !processed.has(j)) {
			length += 1;
			processed.add(j);
			j -= 1;
		}
		max = Math.max(length, max);
	});

	return max;
};

/**
 * Uses 1 set, optimal version
 */
const longestConsecutiveOneSet = (nums) => {
    const set = new Set(nums);
    let longest = 0;

    set.forEach((item) => {
        if (!set.has(item - 1)) {
            let streak = 0;
            let num = item
            while (set.has(num)) {
                streak += 1;
                num += 1
                longest = Math.max(longest, streak)
            }
        }
    })

    return longest
}
