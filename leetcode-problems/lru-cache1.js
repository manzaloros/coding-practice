class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

const LRUCache = (capacity) => {
  this.capacity = capacity;
  this.size = 0;

  this.map = new Map();
  this.head = new Node();

  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = (key) => {
  const node = this.map.get(key);

  if (!node) return -1;

  this.removeNode(node);
  this.addNode(node);

  return node.val;
};

LRUCache.prototype.put = (key, value) => {
  if (this.map.has(key)) {
    const nodeToMove = this.map.get(key);
    nodeToMove.val = value;
    this.removeNode(nodeToMove);

    this.addNode(nodeToMove);
  } else {
    const node = new Node(key, value);
    this.map.set(key, node);
    this.addNode(node);

    this.size += 1;
  }

  // Remove the tail prev if size is too big! Don't forget to decrement size
  if (this.size > this.capacity) {
    const { prev } = this.tail;
    this.removeNode(prev);
    this.map.delete(prev.key);
    this.size -= 1;
  }
};

LRUCache.prototype.addNode = (node) => {
  const { head } = this;

  node.prev = head;
  node.next = head.next;

  head.next.prev = node;
  head.next = node;
};

LRUCache.prototype.removeNode = (node) => {
  const { prev } = node;
  const { next } = node;

  prev.next = next;
  next.prev = prev;
};

const l = new LRUCache(2);
l.put(2, 1);
l.put(2, 2);
l.get(2);
l.put(1, 1);
l.put(4, 1);
l.get(2);
