const longestAreaCode = (codes, numbers) => {
  const longestCodes = [];
  const trie = new Map();

  // const addToTrie = (s) => {
  //   let currTrie = trie;
  //   s.split('').forEach((char) => {
  //     if (!currTrie.has(char)) currTrie.set(char, new Map());
  //     currTrie = currTrie.get(char);
  //   });

  //   currTrie.set('word', s);
  // };

  const addToTrie = (s, i = 0, currTrie = trie) => {
    if (i === s.length) {
      return currTrie.set('word', s);
    }

    if (!currTrie.has(s[i])) currTrie.set(s[i], new Map());
    currTrie = currTrie.get(s[i]);

    addToTrie(s, i + 1, currTrie);
  };

  // make trie
  codes.forEach((code) => {
    addToTrie(code);
  });

  // const search = (s) => {
  //   let result = '';
  //   let currTrie = trie;

  //   // s.split('').forEach((char) => {
  //   //   if (currTrie.has('word')) result = currTrie.get('word');
  //   //   if (currTrie.has(char)) currTrie = currTrie.get(char);
  //   // });

  //   for (let i = 0; i < s.length; i += 1) {
  //     const char = s[i];
  //     if (currTrie.has('word')) result = currTrie.get('word');
  //     if (currTrie.has(char)) {
  //       currTrie = currTrie.get(char);
  //     } else break;
  //   }

  //   return result;
  // };

  // O(length of longest word in trie)
  const search = (s, i = 0, currTrie = trie, prefix = '') => {
    if (i >= s.length) return prefix;

    if (currTrie.has('word')) prefix = currTrie.get('word');
    if (currTrie.has(s[i])) return search(s, i + 1, currTrie.get(s[i]), prefix);

    return prefix;
  };

  // for each num, search trie
  // O(length of word in trie * length of nums)
  numbers.forEach((num) => {
    longestCodes.push(search(num));
  });

  return longestCodes;
};

longestAreaCode(['213', '21358', '1234', '12'], ['21349049', '1204539492', '123490485904']);
