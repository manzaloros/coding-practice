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
	/**
keys and values are numbers
 * @param {number} capacity
 instantiate cache as an object since maps are slow and we aren't using their properties

 init a head and tail. These won't hold any values but will be markers

 init size as zero, will be compared against capacity

 init capacity as a constant
 */
	constructor(capacity) {
		this.cache = new Map();

		this.head = new Node();
		this.tail = new Node();
		this.head.next = this.tail;
		this.tail.prev = this.head;
		this.size = 0;
		this.capacity = capacity;
	}

	/**
Assign node's prev.next to its next
and assign its next.prev to its prev
 */
	removeNode(node) {
		const { prev } = node;
		const { next } = node;

		prev.next = next;
		next.prev = prev;
	}

	/**
    remember head next node
    Assign node next to be next
    Assign next.prev to be node
    Assign head next to be node
    Assign node prev to be head

    (connect head and node, node and next)
 */
	addNode(node) {
		const { next } = this.head;
		this.head.next = node;

		node.next = next;
		node.prev = this.head;

		next.prev = node;
	}

	/** 
 * @param {number} key
 * @return {number}
 If the key is in the cache,
 Remove the node (splices it out)
 Add the node (adds it to the head next)
 Return the node value, or -1 if not found
 */
	get(key) {
		if (this.cache.has(key)) {
			const node = this.cache.get(key);
			this.removeNode(node);

			this.addNode(node);
			return node.val;
		}
		return -1;
	}

	/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
    if the key isn't in the cache,
    Make a new node and add it (adds to head next)
    Assign the cache at the key to the node
    Incerment the size

    If the key is in the cache, update the value by:
    Get the node, change the value
    Remove the node (splices it out)
    Add the node (adds it to the head next so its the "most recently used")

    Check if we're over capacity. If the size is more than capacity
    Remove the the cache at the tail prev key
    Remove the node from the list (splices it out)
    decrement the size to be in bounds
 */
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
