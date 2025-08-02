/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
	let maxJump = 0;
	for (let i = 0; i < nums.length; i += 1) {
		maxJump = Math.max(nums[i] + i, maxJump);

		if (maxJump >= nums.length - 1) return true;
		if (maxJump === i) return false;
	}
};

// maybe simpler?
const canJumpAnother = (nums) => {
	let jumpsRemaining = 0;
	for (const curr of nums) {
		if (jumpsRemaining < 0) return false;
		else if (curr > jumpsRemaining) jumpsRemaining = curr;
		jumpsRemaining -= 1;
	}
	return true;
};
