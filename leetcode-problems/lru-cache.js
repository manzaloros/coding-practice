/* eslint-disable no-multi-assign */
/* Design a data structure that follows the constraints of a Least Recently Used
(LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return
-1.  void put(int key, int value) Update the value of the key if the key exists.
Otherwise, add the key-value pair to the cache. If the number of keys exceeds
the capacity from this operation, evict the least recently used key.  Follow up:
Could you do get and put in O(1) time complexity?

Example 1:

Input ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get",
"get"] [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]] Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); // cache is
{1=1} lRUCache.put(2, 2); // cache is {1=1, 2=2} lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found) lRUCache.put(4, 4); // LRU key was
1, evicts key 1, cache is {4=4, 3=3} lRUCache.get(1);    // return -1 (not
found) lRUCache.get(3);    // return 3 lRUCache.get(4);    // return 4

Constraints:

1 <= capacity <= 3000 0 <= key <= 3000 0 <= value <= 104 At most 3 * 104 calls
will be made to get and put.
 */

// Using built-in JS Map class
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    let value = -1;

    if (this.map.has(key)) {
      value = this.map.get(key);
      this.put(key, value);
    }

    return value;
  }

  put(key, value) {
    this.map.delete(key);

    if (this.map.size === this.capacity) {
      this.map.delete(this.map.keys().next().value);
      this.map.set(key, value);
    } else {
      this.map.set(key, value);
    }
  }
}

// Using Doubly Linked List
class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCacheDLL {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  put(key, value) {
    // Check if this is a duplicate key
    if (this.cache[key]) {
      this.remove(key);
    }

    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      // Make new node the head
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    this.cache[key] = this.head;
    this.size += 1;

    // Pop the tail off if over capacity
    if (this.size > this.capacity) this.remove(this.tail.key);
  }

  get(key) {
    let value = -1;
    if (this.cache[key]) {
      ({ value } = this.cache[key]);

      this.remove(key);
      this.put(key, value);
    }

    return value;
  }

  remove(key) {
    const node = this.cache[key];

    if (node === this.head) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    delete this.cache[key];
    this.size -= 1;
  }
}

const lru = new LRUCacheDLL(2);
lru.put(2, 1);
lru.put(2, 2);
lru.get(2);
lru.put(1, 1);
lru.put(4, 1);
lru.get(2);
