/* Given a string s and a dictionary of strings wordDict, return true if s can
be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the
segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"] Output: true Explanation:
Return true because "leetcode" can be segmented as "leet code".  Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"] Output: true Explanation:
Return true because "applepenapple" can be segmented as "apple pen apple".  Note
that you are allowed to reuse a dictionary word.  Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"] Output:
false

Constraints:

1 <= s.length <= 300 1 <= wordDict.length <= 1000 1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.  All the strings of
wordDict are unique.
 */

/*
  Time: O(2^n). Each iteration you decide to split the string or not.
  Space: O(n), recursion tree can be n deep.
*/
const wordBreakBruteForceRecursionBacktracking = (s, wordDict) => {
  const set = new Set();
  const nonWords = new Set();
  wordDict.forEach((w) => set.add(w));

  const recurse = (string = s, start = 0) => {
    if (start === string.length) return true;

    for (let end = start + 1; end <= string.length; end += 1) {
      const portion = string.substring(start, end);
      if (set.has(portion) && recurse(string, end)) return true;
      // if (!set.has(portion)) nonWords.add(portion);
    }

    return false;
  };

  return recurse();
};

/*
  Still Time Limit Exceeded.

  Time: O(n^3)
  Space: O(n) recursion tree can be n deep.

  With the memoization redundant subproblems are avoided. Recursion tree is pruned.
*/
const wordBreakBruteForceRecursionMemo = (s, wordDict) => {
  const set = new Set();
  const memo = [];
  wordDict.forEach((w) => set.add(w));

  const recurse = (string = s, start = 0) => {
    if (start === string.length) return true;
    if (memo[start]) return memo[start];

    for (let end = start + 1; end <= string.length; end += 1) {
      const portion = string.substring(start, end);
      if (set.has(portion) && recurse(string, end)) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  };

  return recurse();
};
/*
  Time: O(n^3) why?  I thought BFS was O(vertices + edges)
  Space: O(n) with queue

  The queue holds ending indexes of words that are in our dictionary, the we
  know work (or zero, if we're just starting out).

  Push to the queue when you have an ending index that is in your dictionary,
  which means your word is in the dictionary.

  Every time you dequeue that index is your new start, because it's inclusive
  with the substring.

  Make sure to check if you've already visited your current start index

  inner loop needs to go to s.length because substring(start, end) ending index
  is not inclusive
*/
const wordBreakBFS = (s, wordDict) => {
  const set = new Set(wordDict);
  const q = [0];
  const visited = Array(s.length).fill(false);

  while (q.length > 0) {
    const start = q.shift();

    if (!visited[start]) {
      for (let end = start + 1; end <= s.length; end += 1) {
        if (set.has(s.substring(start, end))) {
          q.push(end);

          if (end === s.length) return true;
        }
      }
    }

    visited[start] = true;
  }
  return false;
};

wordBreakBFS('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
// wordBreakBruteForceRecursionMemo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
// ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']);
