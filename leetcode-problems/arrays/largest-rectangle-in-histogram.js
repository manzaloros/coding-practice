/* Given an array of integers heights representing the histogram's bar height
where the width of each bar is 1, return the area of the largest rectangle in
the histogram.

Example 1:

Input: heights = [2,1,5,6,2,3] Output: 10 Explanation: The above is a histogram
where width of each bar is 1.  The largest rectangle is shown in the red area,
which has an area = 10 units.  Example 2:

Input: heights = [2,4] Output: 4

Constraints:

1 <= heights.length <= 105 0 <= heights[i] <= 104 */

const largestRectangleArea = (heights) => {
  const stack = [];
  let maxArea = 0;
  // push 0 in the case that your array is always increasing and won't trigger
  // the inner while loop to calculate the area.
  heights.push(0);

  for (let i = 0; i < heights.length; i += 1) {
    const current = heights[i];
    // while (queue.length > 0 && queue[queue.length - 1][0] <= current) queue.pop();

    // queue.push([current, i]);

    // if (queue.length > 0) {
    //   const localMax = queue[0];
    //   const localMin = queue[queue.length - 1];
    //   const width = Math.abs((localMax[1] + 1) - localMin[1]);
    //   const height = localMin[0];
    //   const area = width * height;

    //   maxArea = Math.max(maxArea, area);
    // }

    // Increasing stack. Only put the current value in when it's greater than
    // the value at the top of the stack. Every time you pop a local maximum,
    // calculate the area.
    while (stack.length > 0 && current < heights[stack[stack.length - 1]]) {
      const minIndex = stack.pop();
      const height = heights[minIndex];

      let width = 0;
      // Top of Stack only includes local maximum, so you know that whatever the
      // closest max was to your minIndex will be at the top of the stack.
      // Calculate the difference between the PREVIOUS number (minIndex) and the
      // local maximum before that
      if (stack.length > 0) {
        width = i - 1 - (stack[stack.length - 1] + 1) + 1;
      } else {
        // Choose the higher number, since the while loop was triggered when you
        // found a number that was less than your current (so choose not to
        // include new number). Calculate the width of the histogram including
        // all values up to this point?
        width = i - 1 - 0 + 1;
      }

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
};

// largestRectangleArea([2, 1, 5, 6, 2, 3]);
// largestRectangleArea([2, 4]);
largestRectangleArea(
  [10, 1, 5, 2, 21, 0, 1],
);
