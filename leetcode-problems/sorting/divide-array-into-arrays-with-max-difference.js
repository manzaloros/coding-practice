
/**
 * Given an array of numbers and a number k
 * 
 * Return subsets of the array, length 3, where the diff between each of the subsets is less than or equal to k
 */
export const divideArray = (nums, k) => {
	nums.sort((a,b) => a-b);

	const check = ([one, two, three]) => two - one <= k && three - one <= k && three - two <= k;

	const chunks = [];
    let chunk = [];

    for (let i = 0; i < nums.length; i += 1) {
        const curr = nums[i]
        if (chunk.length < 3) {
            chunk.push(curr)
        } else {
            chunks.push(chunk);
            chunk = [curr];
        }
    }
    chunks.push(chunk)

	for (const chunk of chunks) {
		if (!check(chunk)) return [];
	}

	return chunks;
};
