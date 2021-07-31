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

/*
  naive:
  make a map key: value. On sum, iterate through map, finding if the prefix is a
  substring of the key, adding the sum of the keys' values. O(number of keys *
  longest key's length)

  trie is (number of words * length of average word)

  binary search is n log n
  [apple, app]
*/

class MapSum {
  constructor() {
    this.trie = new Map();
  }

  insert(key, val) {
    let current = this.trie;
    for (let i = 0; i < key.length; i += 1) {
      const char = key[i];
      if (!current.has(char)) current.set(char, new Map());
      current = current.get(char);
    }

    current.set('sum', val);
  }

  sum(prefix) {
    let sum = 0;

    let current = this.trie;
    for (let i = 0; i < prefix.length; i += 1) {
      const char = prefix[i];

      if (current.has(char)) {
        current = current.get(char);
      } else {
        return 0;
      }
    }

    // dfs on current
    const dfs = (node, currentPrefix) => {
      let result = 0;

      node.forEach((child, key) => {
        if (key === 'sum') {
          result += child;
        } else {
          result += dfs(child);
        }
      });

      return result;
    };

    sum += dfs(current);
    return sum;
  }
}

const m = new MapSum();
m.insert('baa', 333);
m.sum('a');
m.insert('baa', 222);
m.sum('ba');
m.sum('bbaa');
m.insert('bcaaa', 3);
m.sum('aaa');
m.sum('bbb');
m.sum('ccc');
