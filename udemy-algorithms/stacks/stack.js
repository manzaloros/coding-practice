// First in First out
// Array implementation
const stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');
stack.pop(); // 'youtube'
stack.push('amazon');
stack.pop(); // 'amazon'
// could use .shift() and .unshift() but you have to reindex the whole array
// after every operation

// Linked List implementation
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newTop = new Node(val);

    if (!this.first) {
      this.first = newTop;
      this.last = newTop;
    } else {
      newTop.next = this.first;
      this.first = newTop;
    }

    this.size += 1;
    return this.size;
  }

  pop() {
    if (!this.first) return null;

    const { first } = this;

    if (first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = first.next;
    }
    this.length -= 1;
    return first.val;
  }
}

const s = new Stack();
s.push('hello');
s.push('world');
console.log(s.first);
console.log(s.pop());// should be 'world'
console.log(s.pop());
