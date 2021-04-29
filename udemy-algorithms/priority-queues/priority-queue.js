/*
  Priority Queue
  Implemented with a Min Binary heap

  Insertion, Removal O(log n)
  Search: O(n) since there's no guaranteed order between siblings, only between
  parents

  Whenever you dequeue an item, it is always removed in the correct order,
  because the tree fixes itself on insertion and removal.

  Could be implemented as a list, like an array, but time complexity would be
  O(n)
*/
class Node {
  constructor(val, priority) {
    [this.val, this.priority] = [val, priority];
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
  }

  static swap(childIndex, parentIndex, { list } = this) {
    [list[childIndex], list[parentIndex]] = [list[parentIndex], list[childIndex]];
    // returns the child and parent swapped
    return [parentIndex, Math.floor((parentIndex - 1) / 2)];
  }

  enqueue(val, priority, { list } = this) {
    const node = new Node(val, priority);

    list.push(node);
    if (list.length === 1) return this;

    let childIndex = list.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (parentIndex >= 0 && list[childIndex].priority < list[parentIndex].priority) {
      [childIndex, parentIndex] = PriorityQueue.swap.call(this, childIndex, parentIndex);
    }

    return this;
  }

  dequeue({ list } = this, { swap } = PriorityQueue) {
    const oldRoot = list.shift();
    if (list.length === 0) return oldRoot;

    swap = swap.bind(this);

    list.unshift(list.pop());

    const { length } = list;
    let [parentIndex, leftChildIndex, rightChildIndex] = [0, 1, 2];

    while (leftChildIndex < length || rightChildIndex < length) {
      // Check if left or right child is undefined
      const left = list[leftChildIndex] ? list[leftChildIndex].priority : Infinity;
      const right = list[rightChildIndex] ? list[rightChildIndex].priority : Infinity;
      const { priority: parent } = list[parentIndex];

      // if either child has a lower priority
      if (parent > left || parent > right) {
        // if check which priority is lower
        parentIndex = left < right ? swap(leftChildIndex, parentIndex)[0]
          : swap(rightChildIndex, parentIndex)[0];
      } else {
        // break out of loop if the parent is in the correct spot
        break;
      }

      // set new child indices
      [leftChildIndex, rightChildIndex] = [(parentIndex * 2) + 1, (parentIndex * 2) + 2];
    }

    return [oldRoot, this];
  }
}

const p = new PriorityQueue();
p.enqueue('seizure', 18);
p.enqueue('high fever', 39);
p.enqueue('broken arm', 33);
p.enqueue('gunshot wound', 12);
p.enqueue('heart attack', 27);

console.log(p.dequeue());
console.log(p.dequeue());
console.log(p.dequeue());
console.log(p.dequeue());
console.log(p);
