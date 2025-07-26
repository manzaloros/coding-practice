/* 
  O(N^2 * log N) time
*/
const threeSum = (nums) => {
	/*
    Sort, because order doesn't matter? Also will keep like numbers close to each other

    for each num of nums, i, while i < nums.length
    for each num of nums, j, j starts at nums length - 1, while j > i
    get nums[i] + nums[j]
    binary search from left as i + 1 to right as j - 1 for 0 - sum
    if found, push nums at [i,j,k] to result arr

    maybe make sure result doesn't have duplicates...?
  */
	const ans = [];
	nums.sort((a, b) => a - b);
	const search = (left, right, target) => {
		while (left < right) {
			const mid = left + Math.floor((right - left) / 2);
			if (nums[mid] < target) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		return nums[left] === target ? left : null;
	};

	for (let i = 0; i < nums.length; i += 1) {
		if (nums[i] === nums[i - 1]) continue;
		for (let j = nums.length - 1; j > i + 1 /* Makes sure the binary search is in bounds */; j -= 1) {
			if (nums[j] === nums[j + 1]) continue;
			const sum = nums[i] + nums[j];
			const result = search(i + 1, j - 1, 0 - sum /* Searching for a number, when added to the sum, that will be zero */);
			if (result !== null) {
				ans.push([nums[i], nums[j], nums[result]]);
			}
		}
	}
	return ans;
};
