/* eslint-disable max-classes-per-file */

// Implement browser history
// Takes more memory than singly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1)
  push(val) {
    const newTail = new Node(val);

    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.previous = this.tail;
      this.tail = newTail;
    }

    this.length += 1;

    return this;
  }

  // O(1)
  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      oldTail.previous = null;
    }
    this.length -= 1;

    return oldTail;
  }

  // O(1)
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }

    this.length -= 1;

    return oldHead;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.previous = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length += 1;

    return this;
  }

  // O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current; let
      counter;

    if (index > (this.length / 2)) {
      current = this.tail;
      counter = this.length;
      while (counter > index) {
        current = current.previous;
        counter -= 1;
      }
    } else {
      current = this.head;
      counter = 0;
      while (counter < index) {
        current = current.next;
        counter += 1;
      }
    }
    return current;
  }

  // O(n)
  set(index, val) {
    const node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const insertedNode = new Node(val);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode.next;

    previousNode.next = insertedNode;
    insertedNode.previous = previousNode;

    insertedNode.next = nextNode;
    nextNode.previous = insertedNode;

    this.length += 1;

    return true;
  }

  // O(n)
  remove(index) {
    if (index > 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const previousNode = removedNode.previous;
    const nextNode = removedNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    removedNode.next = null;
    removedNode.previous = null;

    this.length -= 1;

    return removedNode;
  }
}
