const assert = require('assert');
// Building a new heap from an array will be O(number of array elements * log n)
class BinaryMaxHeap {
  constructor() {
    this.heap = [];
  }

  // Time: O(log n)
  // The operation takes O log n, for one insert. Thus, doing it for a whole
  // array would be O n log n time.
  insert(val) {
    this.heap.push(val);

    let child = this.heap.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (this.heap[child] > this.heap[parent]) {
      [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
      child = this.heap.length - 1;
      parent = Math.floor((child - 1) / 2);
    }

    return this.heap;
  }

  // Time: O(log n)
  extractMax() {
    if (this.heap.length === 0) return null;

    const max = this.heap.shift();

    if (this.heap.length === 0) return max;

    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1],
      this.heap[0]];

    let parent = 0;
    let left = 1;
    let right = 2;

    while (this.heap[parent] < this.heap[left] || this.heap[parent] < this.heap[right]) {
      if (this.heap[left] > this.heap[right]) {
        [this.heap[parent], this.heap[left]] = [this.heap[left], this.heap[parent]];
        parent = left;
      } else {
        [this.heap[parent], this.heap[right]] = [this.heap[right], this.heap[parent]];
        parent = right;
      }
      left = 2 * parent + 1;
      right = 2 * parent + 2;
    }

    return max;
  }
}

const heap = new BinaryMaxHeap();
const arr = [2, 5, 76, 1, 3, 6, 14];
arr.forEach((e) => heap.insert(e));
arr.forEach((e) => heap.extractMax());
