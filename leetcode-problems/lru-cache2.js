/**
 * @param {number} capacity
 */
const Node = function (val, key) {
  // Node stores key AND value
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};
const LRUCache = function (capacity) {
  this.c = capacity;
  this.size = 0;

  this.cache = new Map();
  this.head = new Node();
  this.tail = new Node();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);

    // sever links
    this.remove(node);
    // node.prev.next = node.next;
    // node.next.prev = node.prev;

    // add node at the beginning
    this.addNode(node);
    // const { next } = this.head;
    // node.next = next;
    // node.prev = this.head;
    // this.head.next = node;
    // next.prev = node;

    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // Get node we're changing and update it's value
    const node = this.cache.get(key);
    node.val = value;

    // sever linkages
    this.remove(node);
    // node.prev.next = node.next;
    // node.next.prev = node.prev;

    // add node at beginning
    this.addNode(node);
    // node.next = this.head.next;
    // node.prev = this.head;
    // this.head.next = node;
    // This link won't work!
    // this.head.next.prev = node;
  } else {
    const node = new Node(value, key);

    // add node at beginning
    this.addNode(node);
    // node.next = this.head.next;
    // node.prev = this.head;
    // this.head.next.prev = node;
    // this.head.next = node;

    this.cache.set(key, node);

    this.size += 1;
  }

  if (this.size > this.c) {
    const { prev } = this.tail;
    this.remove(prev);
    // remove lru node
    // const keyToRemove = this.tail.prev.key;
    // this.tail.prev = this.tail.prev.prev;
    // this.tail.prev.next = this.tail;

    this.cache.delete(prev.key);
    this.size -= 1;
  }
};

// Don't forget you can't reference 'this' properly in an arrow function! for a
// class method!
LRUCache.prototype.addNode = function (node) {
  const { head } = this;

  // Deal with node's linkages
  node.prev = head;
  node.next = head.next;

  // Deal with head and the old head.next's linkages
  head.next.prev = node;
  head.next = node;
};

// Removes a by severing the list's links
// This arrow function is fine because it doesn't reference 'this'
LRUCache.prototype.remove = (node) => {
  // Store references so you don't lose them later!
  const { prev } = node;
  const { next } = node;

  prev.next = next;
  next.prev = prev;
};

const l = new LRUCache(2);
l.put(1, 0);
l.put(2, 2);
l.get(1);
l.put(3, 3);
l.get(2);
l.put(4, 4);
l.get(1);
l.get(3);
l.get(4);
