/* Given an array nums of n integers and an integer target, find three integers
in nums such that the sum is closest to target. Return the sum of the three
integers. You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1 Output: 2 Explanation: The sum that is
closest to the target is 2. (-1 + 2 + 1 = 2).

Constraints:

3 <= nums.length <= 10^3 -10^3 <= nums[i] <= 10^3 -10^4 <= target <= 10^4 */

const threeSumClosest = (nums, target) => {
	nums.sort((a, b) => (a < b ? -1 : 1));

	// initialize answer array initialize current sum only update closest sum and
	// array if new sum is closer to target do abs(target - newSum). Pick the
	// smaller number because that is closer to target

	// iterate
	// iterate for each num. j = i + 1, k = length - 1
	// initialize currSum
	// update answer array and closestSum
	// if currSum > target, move k down
	// if currSum < target, move j update
	// if currSum === target, return [i, j, k]

	// return answer array

	let differenceFromClosestSum = Number.POSITIVE_INFINITY;
	let closestSum = Number.POSITIVE_INFINITY;

	for (let i = 0; i < nums.length; i += 1) {
		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			const currSum = nums[i] + nums[j] + nums[k];

			if (Math.abs(target - currSum) < differenceFromClosestSum) {
				closestSum = currSum;
				differenceFromClosestSum = Math.abs(target - closestSum);
			}

			if (currSum > target) k -= 1;
			if (currSum < target) j += 1;
			if (currSum === target) return currSum;
		}
	}

	return closestSum;
};

// threeSumClosest([-1, 2, 1, -4], 1); // 2
threeSumClosest([1, 1, 1, 0], -100); // 2
