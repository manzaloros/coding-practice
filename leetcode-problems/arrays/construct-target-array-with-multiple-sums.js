/* Construct Target Array With Multiple Sums Given an array of integers target.
From a starting array, A consisting of all 1's, you may perform the following
procedure :

let x be the sum of all elements currently in your array.  choose index i, such
that 0 <= i < target.size and set the value of A at index i to x.  You may
repeat this procedure as many times as needed.  Return True if it is possible to
construct the target array from A otherwise return False.

Example 1:

Input: target = [9,3,5] Output: true Explanation: Start with [1, 1, 1] [1, 1,
1], sum = 3 choose index 1 [1, 3, 1], sum = 5 choose index 2 [1, 3, 5], sum = 9
choose index 0 [9, 3, 5] Done Example 2:

Input: target = [1,1,1,2] Output: false Explanation: Impossible to create target
array from [1,1,1,1].  Example 3:

Input: target = [8,5] Output: true

Constraints:

N == target.length 1 <= target.length <= 5 * 10^4 1 <= target[i] <= 10^9 */

const isPossible = (target) => {
  const heap = [,];
  let sum = 0;

  // this heap is made to that the max value is at heap[1]
  const heapify = (val) => {
    let i = heap.length;
    let parent = i >> 1;
    heap.push(val);
    while (heap[parent] < heap[i]) {
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
      parent = i >> 1;
    }
  };

  const extract = () => {
    if (heap.length === 1) return null;

    const top = heap[1];
    let left;
    let right;
    let i = 1;
    let child = heap[3] > heap[2] ? 3 : 2;

    if (heap.length > 2) heap[1] = heap.pop();
    else heap.pop();

    while (heap[i] < heap[child]) {
      [heap[child], heap[i]] = [heap[i], heap[child]];
      i = child;
      left = i << 1;
      right = left + 1;
      child = heap[right] > heap[left] ? right : left;
    }

    return top;
  };

  target.forEach((num) => {
    sum += num;
    heapify(num);
  });

  while (heap[1] !== 1) {
    let num = extract();
    sum -= num;

    if (num <= sum || sum < 1) return false;

    num %= sum;
    sum += num;
    heapify(num);
  }

  return true;
};

isPossible([1, 1, 1, 2]);
