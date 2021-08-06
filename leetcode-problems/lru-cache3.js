class Node {
  constructor(key, value) {
    // node stores KEY AND VALUE, so that you can retrieve the key so that you
    // can retrieve the node from the cache and just update its value when
    // needed
    this.val = value;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();

    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.capacity = capacity;
  }

  removeNode(node) {
    const { prev } = node;
    const { next } = node;

    prev.next = next;
    next.prev = prev;
  }

  addNode(node) {
    const { next } = this.head;
    this.head.next = node;

    node.next = next;
    node.prev = this.head;

    next.prev = node;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.removeNode(node);

      this.addNode(node);
      return node.val;
    }
    return -1;
  }

  put(key, value) {
    if (!this.cache.has(key)) {
      const node = new Node(key, value);
      this.addNode(node);
      this.cache.set(key, node);

      this.size += 1;
    } else {
      const node = this.cache.get(key);
      node.val = value;
      this.removeNode(node);

      this.addNode(node);
    }
    if (this.size > this.capacity) {
      this.cache.delete(this.tail.prev.key);
      this.removeNode(this.tail.prev);

      this.size -= 1;
    }
  }
}

const l = new LRUCache(2);
l.put(1, 1);
l.put(2, 2);
l.get(1);
l.put(3, 3);
l.get(2);
l.put(4, 4);
l.get(1);
l.get(3);
l.get(4);
