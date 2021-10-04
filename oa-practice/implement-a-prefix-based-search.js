/*
Problem :
Given a list of business_names (strings) and a searchTerm (string).
Return a list of business_names that contains searchTerm as prefix in the business_names.

E.g.
Example 1.
Input:

business_names[] = { "burger king", "McDonald's", "super duper burger's", "subway", "pizza hut"}
searchTerm = "bur"
Ouput:
["burger king", "super duper burger's"]

Example 2
Input:

business_names[] = { "burger king", "McDonald's", "super duper burger's", "subway", "pizza hut"}
searchTerm = "duper bur"
Ouput:
["super duper burger's"]

Expected to discuss the approach and implement the solution.
(Allowed to run and debug the code as many times as we want, in order to make it error free)
*/

// O(averate length of word * number of words)
const prefixBasedSearch = (names, searchTerm, limit) => {
  names = names.map((name) => name.toLowerCase());
  // make trie
  const trie = new Map();

  const addToTrie = (word, businessName, node, index) => {
    if (index >= word.length) {
      node.set('endOfWord', businessName);
    } else {
      const char = word[index];

      if (!node.has(char)) node.set(char, new Map());
      const child = node.get(char);

      addToTrie(word, businessName, child, index + 1);
    }
  };

  names.forEach((name) => {
    const splitName = name.split(' ');

    // Add word and suffixes to trie with whitespace for search
    splitName.forEach((word, i) => {
      if (i !== splitName.length - 1) word += ' ';

      word = word.concat(splitName.slice(i + 1));

      addToTrie(word, name, trie, 0);
    });
  });

  const matches = new Set();
  const results = [];
  // search trie
  const search = (node, index) => {
    if (index === searchTerm.length) {
      results.push(node);
    } else {
      const char = searchTerm[index];
      const child = node.get(char);

      if (child) {
        search(child, index + 1);
      } else {
        node.forEach((potentialChild, key) => {
          if (key !== 'endOfWord') search(potentialChild, index);
        });
      }
    }
  };

  const dfs = (node) => {
    const businessName = node.get('endOfWord');
    if (businessName && matches.size < limit) matches.add(businessName);

    if (matches.size < limit) {
      node.forEach((child, char) => {
        if (char !== 'endOfWord') dfs(child);
      });
    }
  };

  search(trie, 0);

  results.forEach((result) => dfs(result));

  return Array.from(matches);
};

// prefixBasedSearch(['burger king', "McDonald's", "super duper burger's",
//   'subway', 'pizza hut'], 'bur');
// prefixBasedSearch(['burger king', "McDonald's", "super duper burger's",
// 'subway', 'pizza hut'], 'duper bur');
// prefixBasedSearch(['burger king', "McDonald's", "super duper burger's",
//   'subway', 'pizza hut'], 'ger');
prefixBasedSearch(['burger king', "McDonald's", "super duper burger's",
  'subway', 'pizza hut'], ' ', 3);
