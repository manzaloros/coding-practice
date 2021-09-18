/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
// O(length of products, average product.length, searchword.length)
// O(length of products, average product.length)
let suggestedProducts = function (products, searchWord) {
  let root = new Map();
  // build addToTrie

  const addToTrie = (word, trie, index = 0) => {
    if (index === word.length) {
      trie.set('word', word);
    } else {
      const char = word[index];

      if (!trie.has(char)) trie.set(char, new Map());
      addToTrie(word, trie.get(char), index + 1);
    }
  };

  products.forEach((product) => {
    addToTrie(product, root);
  });

  const alpha = (a, b) => (a < b ? -1 : 1);

  const search = (trie, prefix, index = 0) => {
    if (index === prefix.length) return trie;

    const child = trie.get(prefix[index]);
    if (child) return search(child, prefix, index + 1);
    // if not found
    return -1;
  };

  let results = [];

  const dfs = (curr) => {
    if (results.length >= 3) return;

    if (curr.has('word')) results.push(curr.get('word'));
    const children = Array.from(curr.keys()).sort(alpha).filter((key) => key !== 'word');

    children.forEach((child) => {
      dfs(curr.get(child));
    });
  };

  const output = [];
  let prefix = '';

  // iterate search word
  searchWord.split('').forEach((char) => {
    prefix += char;
    let trie = search(root, prefix);

    if (trie !== -1) {
      output.push(dfs(trie));
    }

    output.push(results);
    results = [];
  });

  return output;
};

suggestedProducts(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
  'mouse');
// suggestedProducts(['havana'], 'tatiana');
