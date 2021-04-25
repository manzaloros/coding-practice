/*
  Last in, first out 🏁
  Background tasks, uploading resources, printing / task processing
*/

// Array implementation
// use unshift, pop so you don't need to reindex
const q = [];
q.unshift('FIRST');
q.unshift('SECOND');
q.unshift('THIRD');

q.pop(); // FIRST

// Linked List implementation (more lightweight but more code)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add to tail (push)
  enqueue(val) {
    const insertedNode = new Node(val);
    if (!this.first) {
      this.first = insertedNode;
      this.last = insertedNode;
    } else {
      this.last.next = insertedNode;
      this.last = insertedNode;
    }
    this.size += 1;
    return this.size;
  }

  // Remove from head (shift)
  dequeue() {
    if (!this.first) return undefined;
    const dequeuedNode = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size -= 1;
    return dequeuedNode.val;
  }
}

const queue = new Queue();
queue.enqueue('Harry');
queue.enqueue('Ron');
console.log(queue.dequeue()); // Harry
queue.dequeue();
queue.dequeue();
