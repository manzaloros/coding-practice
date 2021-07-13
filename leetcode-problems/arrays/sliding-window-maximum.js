/* You are given an array of integers nums, there is a sliding window of size k
which is moving from the very left of the array to the very right. You can only
see the k numbers in the window. Each time the sliding window moves right by one
position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3 Output: [3,3,5,5,6,7] Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3 1 [3  -1  -3] 5  3  6  7       3 1  3 [-1  -3
 5] 3  6  7       5 1  3  -1 [-3  5  3] 6  7       5 1  3  -1  -3 [5  3  6] 7
 6 1  3  -1  -3  5 [3  6  7]      7 Example 2:

Input: nums = [1], k = 1 Output: [1] Example 3:

Input: nums = [1,-1], k = 1 Output: [1,-1] Example 4:

Input: nums = [9,11], k = 2 Output: [11] Example 5:

Input: nums = [4,-2], k = 2 Output: [4]

Constraints:

1 <= nums.length <= 105 -104 <= nums[i] <= 104 1 <= k <= nums.length */

const maxSlidingWindow = (nums, k) => {
  const maxes = [];

  // Front of queue will track local maximums, and will be decreasing
  // This is a double ended queue, a deque.
  const queue = [];

  // start window at beginning and move one space at a time
  for (let last = 0, first = 1 - k; last < nums.length; last += 1, first += 1) {
    while (queue.length > 0 && nums[last] > queue[queue.length - 1]) queue.pop();

    // Push a new number in when it is guaranteed to be less than the front of
    // the queue. It might also be a new maximum in a future window.
    queue.push(nums[last]);

    // only add to max if the window has been fully formed (since it starts a 1
    // - k)
    if (first >= 0) {
      maxes.push(queue[0]);

      // If the max is the first element in the queue, remove it so that it
      // leaves your window
      if (nums[first] === queue[0]) queue.shift();
    }
  }

  return maxes;
};
