/* Given n non-negative integers representing an elevation map where the width
of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] Output: 6 Explanation: The above
elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.  Example
2:

Input: height = [4,2,0,3,2,5] Output: 9

Constraints:

n == height.length 0 <= n <= 3 * 104 0 <= height[i] <= 105 */
// two pointer

const trap = (height) => {
  let left = 0;
  let right = height.length - 1;

  let result = 0;

  let maxLeft = 0;
  let maxRight = 0;

  // move pointers inward. Every time you see a difference in height you are
  // calculating the valleys
  while (left <= right) {
    if (height[left] <= height[right]) {
      // If this height is a maximum so far
      if (height[left] >= maxLeft) {
        // notice you don't add to the result here
        maxLeft = height[left];
      } else {
        // only update result when you definitely have a valley. Since you know
        // the right bound is at least the same height or higher than your
        // current left bound, you will definitely have at least the difference
        // between your max left and the current height you're on.
        result += (maxLeft - height[left]);
      }

      left += 1;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        result += maxRight - height[right];
      }

      right -= 1;
    }
  }

  return result;
};

const trapBruteForce = (height) => {
  let answer = 0;

  // For each height, find the amount of water that can be trapped. You find the
  // smallest of the TALLEST walls including and around the current height.
  // Then, you subtract the current height from that minimum of the tallest height.
  for (let i = 0; i < height.length; i += 1) {
    let leftMax = 0;
    let rightMax = 0;

    for (let j = i; j >= 0; j -= 1) {
      leftMax = Math.max(leftMax, height[j]);
    }

    for (let j = i; j < height.length; j += 1) {
      rightMax = Math.max(rightMax, height[j]);
    }

    const shortestWallBoundingValley = Math.min(rightMax, leftMax);

    answer += (shortestWallBoundingValley - height[i]);
  }

  return answer;
};

trapDivideAndConquer([1, 0, 2, 4, 1, 3, 1, 0, 2]);
