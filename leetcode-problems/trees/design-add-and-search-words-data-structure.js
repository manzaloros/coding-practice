/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/**
 * Initialize your data structure here.
 */
let WordDictionary = function () {
  this.trie = new Map();
};

/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function (word) {
  let { trie } = this;

  word.split('').forEach((char) => {
    if (!trie.has(char)) trie.set(char, new Map());

    trie = trie.get(char);
  });

  // this is a big problem, because it's listed in the same place as letters
  trie.set('endOfWord', true);
};

/**
* @param {string} word
* @return {boolean}
*/
const searchInNode = (word, trie) => {
  for (let i = 0; i < word.length; i += 1) {
    const char = word[i];

    if (!trie.has(char)) {
      if (char === '.') {
        for (let [letter, childTrie] of trie.entries()) {
          if (searchInNode(word.substring(i + 1), childTrie)) return true;
        }
      }
      return false;
    }
    trie = trie.get(char);
  }
  if (trie === true) return false;

  return trie.has('endOfWord');
};

WordDictionary.prototype.search = function (word) {
  // return searchInNode(word, this.trie);

  const helper = (i, curr) => {
    const char = word[i];
    if (char === '.') {
      let found = false;

      curr.forEach((child, letter) => {
        if (letter !== 'endOfWord') { if (helper(i + 1, child)) found = true; }
      });

      return found;
    }
    return (
      (i === word.length && (curr.has('endOfWord') || char === '.'))
      || (curr.has(char) && helper(i + 1, curr.get(char)))
    );
  };

  return helper(0, this.trie);
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

const w = new WordDictionary();
// // w.addWord('bad');
// w.search('.ad');
w.addWord('a');
w.addWord('a');
w.search('a.');
