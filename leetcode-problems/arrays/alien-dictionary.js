/* There is a new alien language that uses the English alphabet. However, the
order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary,
where the strings in words are sorted lexicographically by the rules of this new
language.

Return a string of the unique letters in the new alien language sorted in
lexicographically increasing order by the new language's rules. If there is no
solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter
where they differ, the letter in s comes before the letter in t in the alien
language. If the first min(s.length, t.length) letters are the same, then s is
smaller if and only if s.length < t.length.

Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"] Output: "wertf" Example 2:

Input: words = ["z","x"] Output: "zx" Example 3:

Input: words = ["z","x","z"] Output: "" Explanation: The order is invalid, so
return "".

Constraints:

1 <= words.length <= 100 1 <= words[i].length <= 100 words[i] consists of only
lowercase English letters. */

// input: array of strings sorted dictionary order
// output: string "" if no solution or any combo of unique letters (in
// increasing dictionary order)
// return "" if the words ARENT in dictionary order in the first place.
// the graph is cyclical

const alienOrder = (words) => {
  // List of all vertices neighbor: [nodes that share a directed edge with
  // neighbor]
  // so, if no nodes are directed into another node, that node will have an
  // empty array
  const reverseAdjacencyList = new Map();

  words.forEach((word) => {
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (!reverseAdjacencyList.has(char)) reverseAdjacencyList.set(char, []);
    }
  });

  for (let i = 0; i < words.length - 1; i += 1) {
    const word1 = words[i];
    const word2 = words[i + 1];

    if (word1.length > word2.length && word1.startsWith(word2)) return '';

    for (let j = 0; j < Math.min(word1.length, word2.length); j += 1) {
      // if there is a mismatch
      if (word1[j] !== word2[j]) {
        // add word 1 character leading into word2 character (directed edge),
        // like b: [a] for english alphabet
        reverseAdjacencyList.get(word2[j]).push(word1[j]);
        break;
      }
    }
  }

  // create order array
  const topoOrder = [];
  const seen = new Set();
  let cyclical = false;

  const dfs = (node, branchMemo) => {
    seen.add(node);
    branchMemo.add(node);

    reverseAdjacencyList.get(node).forEach((neighbor) => {
      if (branchMemo.has(neighbor)) cyclical = true;

      if (!seen.has(neighbor)) dfs(neighbor, branchMemo);
    });

    branchMemo.delete(node);
    topoOrder.push(node);
  };

  reverseAdjacencyList.forEach((list, node) => {
    if (!seen.has(node)) dfs(node, new Set());
  });

  return cyclical ? '' : topoOrder.join('');
};

// alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']);
// alienOrder(['z', 'x']);
// alienOrder(['z', 'x', 'z']);
alienOrder(['wrt', 'wrf', 'wrt', 'ett', 'rftt']);
