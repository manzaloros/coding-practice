/*
  As long as you have a great hash function, average time complexities:
  Insert() O(1)
  Deletion O(1)
  Access O(1)
*/
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let [total, prime] = [0, 31];

    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      const value = key[i].charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, val, { keyMap, hash } = this) {
    const index = hash.call(this, key);
    if (!Array.isArray(keyMap[index])) {
      keyMap[index] = [[key, val]];
    } else {
      for (let i = 0; i < keyMap[index].length; i += 1) {
        if (keyMap[index][i][0] === key) { keyMap[index][i][1] = val; return this; }
      }
      keyMap[index].push([key, val]);
    }

    return this;
  }

  get(key, index = this.hash(key), { keyMap } = this) {
    if (Array.isArray(keyMap[index])) {
      for (let i = 0; i < keyMap[index].length; i += 1) {
        if (keyMap[index][i][0] === key) return keyMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j += 1) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j += 1) {
          if (!values.includes(this.keyMap[i][j][1])) { values.push(this.keyMap[i][j][1]); }
        }
      }
    }
    return values;
  }
}

const h = new HashTable();
h.set('hello', 'world');
h.set('helli', 'sup');
console.log(h.get('hello'));
console.log(h.set('game of', 'thrones'));
console.log(h.set('i want a ', 'thrones'));
console.log(h.keys());
console.log(h.values());
console.log(h.set('hello', 'new hello!!'));
console.log(h.get('hello'));
