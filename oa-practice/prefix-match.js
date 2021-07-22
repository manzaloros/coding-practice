/* Given an array of strings input : ["Jacky" , "Jack", "Jackster"] and a query
: ["Jack"] return number of string items for which query is the prefix but
doesn't match the whole input. In this case it will be [2] as Jack is prefix for
"Jacky" and "Jackster" but matches word by word with "Jack" so that won't be
counted. */

// output is num rep how many are prefixes but not match in the array

const isPrefixButNotMatch = (arr, query) => {
  // keep count variable

  // make trie from arr words
  // for each word keep a boolean of "is prefix"
  // also iterate the query string with each word
  // if a char doesn't match query, change bool to false
  // at end of word, add a 'terminal' property
  // So, the char 'a' if it were a full word, would have a 'terminal' propery,
  // along side any chars it was a prefix for
  // when you get to terminal of word in arr AND isprefix is still true AND you
  // are not at the end of the query word
  // add one to count

  // make a trie with arr AND query word
  // if you get to terminal and the char !== last char of query, add to count

  // Space: O(unique number of chars)
  // Time: O(unique number of chars)
  const trie = new Map();
  let count = 0;
  const lastChar = query[query.length - 1];

  const addToTrie = (string) => {
    let currentNode = trie;
    let char = '';
    let isPrefix = true;

    for (let i = 0; i < string.length; i += 1) {
      char = string[i];

      if (i < query.length && char !== query[i]) isPrefix = false;

      if (!currentNode.has(char)) currentNode.set(char, new Map());

      currentNode = currentNode.get(char);
    }

    if (char !== lastChar && isPrefix) count += 1;
  };

  arr.forEach((word) => addToTrie(word));

  return count;
};

isPrefixButNotMatch(['Jacky', 'Jack', 'Jackster'], 'Jack');
