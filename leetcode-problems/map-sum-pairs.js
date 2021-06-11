/* Implement the MapSum class:

MapSum() Initializes the MapSum object.  void insert(String key, int val)
Inserts the key-val pair into the map. If the key already existed, the original
key-value pair will be overridden to the new one.  int sum(string prefix)
Returns the sum of all the pairs' value whose key starts with the prefix.

Example 1:

Input ["MapSum", "insert", "sum", "insert", "sum"] [[], ["apple", 3], ["ap"],
["app", 2], ["ap"]] Output [null, null, 3, null, 5]

Explanation MapSum mapSum = new MapSum(); mapSum.insert("apple", 3);
mapSum.sum("ap");           // return 3 (apple = 3) mapSum.insert("app", 2);
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)

Constraints:

1 <= key.length, prefix.length <= 50 key and prefix consist of only lowercase
English letters.  1 <= val <= 1000 At most 50 calls will be made to insert and
sum. */
class Node {
  constructor() {
    this.children = {};
    this.score = 0;
  }
}
class MapSum {
  constructor() {
    this.root = new Node();
    // Need the map to track whether we have added a certain key
    this.map = {};
  }

  // TC: O(maxLengthOfKey)
  // SC: O(n)
  insert(key, val) {
    // Can't just over write existing value because it could contain multiple
    // prefixes' values combined. So just remove the specific key's value if it
    // exists
    const delta = val - (this.map[key] || 0);
    this.map[key] = val;
    let currentNode = this.root;

    for (let i = 0; i < key.length; i += 1) {
      const char = key[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
      currentNode.score += delta;
    }
  }

  sum(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i += 1) {
      const char = prefix[i];
      if (!currentNode.children[char]) return 0;

      currentNode = currentNode.children[char];
    }
    return currentNode.score;
  }
}

const t = new MapSum();
t.insert('apple', 3);
t.sum('ap');
t.insert('app', 2);
t.insert('apple', 2);
t.sum('ap');
