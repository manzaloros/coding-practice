/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

*/

const wordBreak = (s, wordDict) => {
  // Bottom up solution
  // Represents substrings
  // const dp = new Array(s.length + 1).fill(false);
  // dp[0] = true;

  // for (let i = 1; i <= s.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     const word = s.slice(j, i);
  //     if (dp[j] === true && wordDict.includes(word)) {
  //       dp[i] = true;
  //       break;
  //     }
  //   }
  // }

  // return dp[s.length];
  const wordSet = new Set(wordDict);
  let result = false;
  const memo = {};
  const solve = (word) => {
    if (memo[word]) {
      return;
    }
    memo[word] = true;
    if (wordSet.has(word)) {
      memo[word] = true;
      result = true;
      return true;
    }

    for (let i = 1; i < word.length; i += 1) {
      let prefix = word.slice(0, i);
      let suffix = word.slice(i, word.length);
      if (wordSet.has(prefix) && solve(suffix)) {
        result = true;
      }
    }
  }
  solve(s);
  return result;
}