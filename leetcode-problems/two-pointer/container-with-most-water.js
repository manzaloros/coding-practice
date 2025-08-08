/**
 *
    Deciding to increment left or right depends on whichever height is larger.

    Since we're always decreasing the width of the box, we should always keep
    the higher element. So move whichever side is shorter inwards to consider
    the next box.

    O(N) time, O(1) space
 */
const maxArea = (height) => {
	let max = 0;
	left = 0;
	right = height.length - 1;

	while (left < right) {
		width = right - left;
		max = Math.max(max, Math.min(height[left], height[right]) * width);
		if (height[left] <= height[right]) left += 1;
		else right -= 1;
	}
	return max;
};
