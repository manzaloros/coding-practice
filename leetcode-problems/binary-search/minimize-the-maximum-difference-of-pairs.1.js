/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}

 The reason why we use binary search is:
 We choose some max difference. Then we see if we can make the right number of pairs (>= p)
 with that max difference. Then, in order to choose the next max difference we can cut the size
 of the maxDifference in half since the input is sorted

 So, we aren't searching for a target index. We are searching for a maximum difference between P pairs, 
 and we want that number to be minimized, which is why we move RIGHT to mid when we CAN make P pairs with
 that given max difference. We just keep checking and eventually return LEFT since its the smallest maxDifference
 that can make P pairs.

l:1
r:2
m:1
    i
1,2,2,4

maxDiff: 0
l: 1
r: 1

1,1,2,3,7,10
    i
0,1,2,3,4,5
pairs: 0

maxDiff: 1
1,1
2,3

maxDiff: 3
7,10
2,3

So we choose max diff of 1, since it is the minimum of the maxDiff values (1 and 3)
 */
// time: O(n log n)
const minimizeMax = (nums, p) => {
	// sort so values similar to each other are grouped close together

	// canMakePairs(maxDiff)
	// init pairs = 0
	// // iterate nums
	// if (nums[i + 1] - nums[i] <= maxDiff) pairs += 1, i += 1
	//
	// return pairs >= p

	// binary search
	// init left = 0
	// init right = nums.length - 1

	// while left < right
	// mid is left + right - left  / 2

	// if can make pairs with mid
	// left = mid + 1
	// else, right = mid

	// return left

	nums.sort((a, b) => a - b);
	const canMakePairs = (maxDiff) => {
		let pairs = 0;
		for (let i = 0; i < nums.length - 1; i += 1) {
			if (nums[i + 1] - nums[i] <= maxDiff) {
				i += 1;
				pairs += 1;
			}
		}
		return pairs >= p;
	};

	let left = 0;
	let right = nums[nums.length - 1] - nums[0];

	while (left < right) {
		const maxDiff = left + Math.floor((right - left) / 2);
		if (canMakePairs(maxDiff)) {
			right = maxDiff;
		} else {
			left = maxDiff + 1;
		}
	}

	return left;
};
