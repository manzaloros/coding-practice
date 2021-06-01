/* Implement a first in first out (FIFO) queue using only two stacks. The
implemented queue should support all the functions of a normal queue (push,
peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.  int pop() Removes
the element from the front of the queue and returns it.  int peek() Returns the
element at the front of the queue.  boolean empty() Returns true if the queue is
empty, false otherwise.  Notes:

You must use only standard operations of a stack, which means only push to top,
peek/pop from top, size, and is empty operations are valid.  Depending on your
language, the stack may not be supported natively. You may simulate a stack
using a list or deque (double-ended queue) as long as you use only a stack's
standard operations.  Follow-up: Can you implement the queue such that each
operation is amortized O(1) time complexity? In other words, performing n
operations will take overall O(n) time even if one of those operations may take
longer.

Example 1:

Input ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [],
[]] Output [null, null, null, 1, 1, false]

Explanation MyQueue myQueue = new MyQueue(); myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1 myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

Constraints:

1 <= x <= 9 At most 100 calls will be made to push, pop, peek, and empty.  All
the calls to pop and peek are valid. */

/*
Amortized TC is O(1) for all operations
SC: O(n) for the stacks
*/
class MyQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
    this.front = 0;
  }

  push(x) {
    if (this.inbox.length === 0) this.front = x;
    this.inbox.push(x);
  }

  // Number of times pop() can be called is limited by the number of times push() is called
  pop() {
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        // O(2n) or O(n)
        this.outbox.push(this.inbox.pop());
      }
    }

    const item = this.outbox.pop();
    this.front = this.outbox[this.outbox.length - 1] || this.inbox[0];
    return item;
  }

  peek() {
    if (this.outbox.length > 0) {
      return this.outbox[this.outbox.length - 1];
    }

    return this.front;
  }

  empty() {
    return this.outbox.length === 0 && this.inbox.length === 0;
  }
}
