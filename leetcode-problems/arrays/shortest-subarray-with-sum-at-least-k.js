/* Return the length of the shortest, non-empty, contiguous subarray of nums
with sum at least k.

If there is no non-empty subarray with sum at least k, return -1.

Example 1:

Input: nums = [1], k = 1 Output: 1 Example 2:

Input: nums = [1,2], k = 4 Output: -1 Example 3:

Input: nums = [2,-1,2], k = 3 Output: 3

Note:

1 <= nums.length <= 50000 -105 <= nums[i] <= 105 1 <= k <= 109
 */
/*
  Uses a monotonic queue;
*/
const shortestSubarray = (nums, k, { length } = nums) => {
  const prefix = [0];

  for (let i = 0; i < length; i += 1) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  // answer is just initialized as a window the size of the whole array
  let answer = length + 1;
  // double ended queue
  const monoq = [];

  // Before adding an element (here, it's an index) from the prefix sums to the
  // queue,
  for (let y = 0; y < prefix.length; y += 1) {
    const currSum = prefix[y];

    // remove items from the end of queue while they are greater than or equal
    // to the current value. Queue always needs to be increasing?
    while (monoq.length > 0 && currSum <= prefix[monoq[monoq.length - 1]]) {
      monoq.pop();
    }

    // remove items from the front of the queue while they are less than the
    // current value + the sum we're trying to be larger than. Basically, check
    // if our current sum fufills our condition.
    while (monoq.length > 0 && currSum >= prefix[monoq[0]] + k) {
      answer = Math.min(answer, y - monoq.shift());
    }

    // Add current index to end of queue
    monoq.push(y);
  }

  return answer < length + 1 ? answer : -1;
};

class Item {
  constructor(val, index) {
    this.val = val;
    this.index = index;
  }
}

class IncreasingMonotonicQueue {
  constructor(k) {
    // front of the increasing queue is the runnning max
    this.k = k;
    this.q = [];
    this.min = Infinity;
  }

  push(newItem) {
    // while queue isn't empty and the new item val is less than the item at the
    // end of the queue's value
    while (this.q.length > 0 && newItem.val < this.q[this.q.length - 1].val) {
      this.q.pop();
    }

    // while queue isn't empty and the new item's value - the front of the
    // queue's value is greater than the sum (k in this problem)
    while (this.q.length > 0 && newItem.val - this.q[0].val >= this.k) {
      this.min = Math.min(this.min, newItem.index - this.q[0].index);
      this.q.shift();
    }

    this.q.push(newItem);
  }
}

const shortestSubarray1 = (nums, k) => {
  const increasingMonotonicQueue = new IncreasingMonotonicQueue(k);
  increasingMonotonicQueue.push(new Item(0, -1));

  for (let i = 0; i < nums.length; i += 1) {
    // Getting the prefix sum in place
    nums[i] = i > 0 ? nums[i] + nums[i - 1] : nums[0];

    increasingMonotonicQueue.push(new Item(nums[i], i));
  }

  return increasingMonotonicQueue.min !== Infinity ? increasingMonotonicQueue.min : -1;
};

shortestSubarray([1, -4, 2, 3, -1, 6], 3);
