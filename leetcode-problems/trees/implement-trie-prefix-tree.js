let Trie = function () {
  this.trie = new Map();
};

Trie.prototype.insert = function (word, index = 0, node = this.trie) {
  if (index === word.length) {
    node.set('word', word);
  } else {
    const char = word[index];

    if (!node.has(char)) node.set(char, new Map());
    this.insert(word, index + 1, node.get(char));
  }
};

Trie.prototype.search = function (word, index = 0, node = this.trie) {
  if (index === word.length) return node.has('word');

  const child = node.get(word[index]);

  return child ? this.search(word, index + 1, child) : false;
};

Trie.prototype.startsWith = function (prefix, index = 0, node = this.trie) {
  if (index === prefix.length) return true;

  const child = node.get(prefix[index]);

  return child ? this.startsWith(prefix, index + 1, child) : false;
};
