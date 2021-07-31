/* Given an array of strings products and a string searchWord. We want to design
a system that suggests at most three product names from products after each
character of searchWord is typed. Suggested products should have common prefix
with the searchWord. If there are more than three products with a common prefix
return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of
searchWord is typed.

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord
= "mouse" Output: [["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"], ["mouse","mousepad"], ["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically =
["mobile","moneypot","monitor","mouse","mousepad"] After typing m and mo all
products match and we show user ["mobile","moneypot","monitor"] After typing
mou, mous and mouse the system suggests ["mouse","mousepad"] Example 2:

Input: products = ["havana"], searchWord = "havana" Output:
[["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]] Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord =
"bags" Output:
[["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana" Output:
[[],[],[],[],[],[],[]]

Constraints:

1 <= products.length <= 1000 There are no repeated elements in products.  1 <= Σ
products[i].length <= 2 * 10^4 All characters of products[i] are lower-case
English letters.  1 <= searchWord.length <= 1000 All characters of searchWord
are lower-case English letters.
 */
/*
output: array of arrays rep. the words that are returned from products after
each character of searchWord is typed. Only return at most the 3
lexicographically smallest words per character.
*/

// Time: O(searchword.length ^ 2 * log products.length)
// Space: O(1) if you ignore output
const suggestedProducts = (products, searchWord) => {
  // Time n Log n
  products.sort((a, b) => (a < b ? -1 : 1));

  let prefix = '';
  const searchSuggestions = [];

  const binarySearch = (word) => {
    let [left, right] = [0, products.length];
    const matches = [];

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      // O(length of word)
      if (products[mid].substring(0, prefix.length) < prefix) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // return [suggestion1 - 3] if they exist
    while (left < products.length && matches.length < 3) {
      // O(length of word);
      if (left < products.length && products[left].substring(0, prefix.length) === prefix) {
        matches.push(products[left]);
      }
      left += 1;
    }

    return matches;
  };

  // O(searchword.length)
  for (let i = 0; i < searchWord.length; i += 1) {
    prefix += searchWord[i];

    // O(length of word * log length of products)
    searchSuggestions.push(binarySearch(prefix));
  }

  return searchSuggestions;
};

const suggestedProductsTrie = (products, searchWord) => {
  const aCode = 'a'.charCodeAt(0);

  class TrieNode {
    constructor() {
      this.isWord = false;
      this.children = [];
    }
  }
  // Create trie
  const trie = new TrieNode();

  const dfsWithPrefix = (node, currentPrefix) => {
    const result = [];

    if (node.isWord) result.push(currentPrefix);

    // iterate through alphabet
    // Time: O(1), because always 26 iterations.
    for (let char = 0; char <= 26; char += 1) {
      const childTrie = node.children[char];

      if (childTrie) {
        const nextPrefix = currentPrefix + String.fromCharCode(char + aCode);
        const wordsThatStartWithPrefix = dfsWithPrefix(childTrie, nextPrefix);

        result.push(...wordsThatStartWithPrefix);
      }
    }

    return result;
  };

  const insert = (string) => {
    let current = trie;

    for (let i = 0; i < string.length; i += 1) {
      const currentCharCode = string.charCodeAt(i) - aCode;

      if (!current.children[currentCharCode]) {
        current.children[currentCharCode] = new TrieNode();
      }

      current = current.children[currentCharCode];
    }

    current.isWord = true;
  };

  // Add all product words to trie
  products.forEach((product) => insert(product));

  const getWordsStartingWith = (prefix) => {
    let current = trie;

    const result = [];

    // Search the trie for the prefix
    for (let i = 0; i < prefix.length; i += 1) {
      const currentCharCode = prefix.charCodeAt(i) - aCode;

      if (!current.children[currentCharCode]) {
        return result;
      }

      current = current.children[currentCharCode];
    }

    const wordsThatStartWithPrefix = dfsWithPrefix(current, prefix).slice(0, 3);

    return result.concat(wordsThatStartWithPrefix);
  };

  let prefix = '';
  const answer = [];

  for (let i = 0; i < searchWord.length; i += 1) {
    prefix += searchWord[i];

    answer.push(getWordsStartingWith(prefix));
  }

  return answer;
};

// suggestedProductsTrie(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse');
// suggestedProductsTrie(['havana'], 'havana');
// suggestedProductsTrie(['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags');
// suggestedProductsTrie(['havana'], 'tatiana');
suggestedProductsTrie(['code', 'codephone', 'coddle', 'coddles', 'codes'],
  'coddle');
