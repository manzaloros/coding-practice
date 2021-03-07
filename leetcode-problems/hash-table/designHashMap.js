/* Design HashMap
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
*/

class MyHashMap {
  constructor() {
    this.storage = Array.from(Array(1000000)).map((e) => []);
  }

  hashIndex(key) {
    return key.toString().charCodeAt() % 1000000;
  }

  put(key, val) {
    const index = this.hashIndex(key);
    for (let i = 0; i < this.storage[key].length; i += 1) {
      const tuple = this.storage[key][i];
      if (tuple[0] === key) {
        tuple[1] = val;
        return;
      }
    }
    this.storage[key].push([key, val]);
  }

  get(key) {
    const index = this.hashIndex(key);
    for (let i = 0; i < this.storage[key].length; i += 1) {
      const tuple = this.storage[key][i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return -1;
  }

  remove(key) {
    const index = this.hashIndex(key);
    for (let i = 0; i < this.storage[key].length; i += 1) {
      const tuple = this.storage[key][i];
      if (tuple[0] === key) {
        this.storage[key].splice(i, 1);
        return;
      }
    }
  }
}

const obj = new MyHashMap();
obj.put(1, 1);
obj.put(2, 2);
obj.get(1); // returns 1
obj.get(3); // returns -1 (not found)
obj.put(2, 1); // update the existing value
obj.get(2); // returns 1
obj.remove(2); // remove the mapping for 2
obj.get(2);
