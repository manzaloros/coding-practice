/* class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.trie = new TrieNode();
  }

  addWord(word) {
    let { trie } = this;
    word.split('').forEach((char) => {
      if (!trie.children.has(char)) trie.children.set(char, new TrieNode());

      trie = trie.children.get(char);
    });

    trie.endOfWord = true;
  }

  search(word) {
    const dfs = (index, node) => {
      const char = word[index];

      if (char === '.') {
        let found = false;
        node.children.forEach((child) => {
          if (!found) { found = dfs(index + 1, child); }
        });

        return found;
      }

      if (node.endOfWord && index === word.length) return true;

      if (!node.children.has(char)) return false;

      node = node.children.get(char);

      return dfs(index + 1, node);
    };

    return dfs(0, this.trie);
  }
}
 */
/* class TrieNode {
  constructor() {
    this.children = Array(26);
    this.isWord = false;
  }
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

class WordDictionary {
  constructor() {
    this.trie = new TrieNode();
  }

  addWord(word) {
    let { trie } = this;

    word.split('').forEach((char) => {
      const code = getCode(char);
      if (!trie.children[code]) trie.children[code] = new TrieNode();

      trie = trie.children[code];
    });

    trie.isWord = true;
  }

  search(word) {
    const dfs = (trie, index) => {
      if (index === word.length) return trie.isWord;

      const char = word[index];
      const code = getCode(char);

      if (char !== '.') {
        const child = trie.children[code];
        if (!child) return false;

        return dfs(child, index + 1);
      }

      for (let i = 0; i < 26; i += 1) {
        const child = trie.children[i];

        if (child) {
          let found = dfs(child, index + 1);
          if (found) return true;
        }
      }

      return false;
    };

    return dfs(this.trie, 0);
  }
} */

/* class Node {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.node = new Node();
  }

  addWord(word) {
    let { node } = this;

    word.split('').forEach((char) => {
      if (!node.children.has(char)) node.children.set(char, new Node());
      node = node.children.get(char);
    });

    node.isWord = true;
  }

  search(word) {
    const queue = [...this.node.children.values()];

    word.split('').forEach((char) => {
      for (let i = queue.length; i > 0; i -= 1) {
        const { children } = queue.shift();

        if (char === '.') {
          queue.push(...children.values()); break;
        } else if (children.has(char)) queue.push(children.get(char)); break;
      }
    });

    while (queue.length > 0) {
      const child = queue.shift();

      if (child.isWord) return true;
    }

    return false;
  }
} */

// Rohan:
class WordDictionary {
  constructor() {
    this.trie = new Map();
  }

  addWord(word) {
    let { trie } = this;

    word.split('').forEach((char) => {
      if (!trie.has(char)) trie.set(char, new Map());
      trie = trie.get(char);
    });

    trie.set('isWord', true);
  }

  search(word, trie = this.trie, i = 0) {
    if (i === word.length) return trie.has('isWord');

    const char = word[i];

    if (char === '.') {
      /*
        Get array of keys
        get array of all keys that aren't isWord
        get array of booleans whether a match is found
        get array of whether any booleans were found
      */
      return Array.from(trie.keys())
        .filter((key) => key !== 'isWord')
        .map((key) => this.search(word, trie.get(key), i + 1))
        .reduce((a, b) => a || b, false);
    }

    if (!trie.has(char)) return false;

    return this.search(word, trie.get(char), i + 1);
  }
}

const t = new WordDictionary();
// t.addWord('ran');
// t.addWord('rune');
// t.addWord('runner');
// t.addWord('runs');
// t.addWord('add');
// t.addWord('adds');
// t.addWord('adder');
// t.addWord('addee');
// t.search('..n');
t.addWord('bad');
t.addWord('dad');
t.addWord('mad');
t.search('.ad');
