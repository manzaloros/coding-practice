/* Given two strings word1 and word2, return the minimum number of operations
required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character Delete a character Replace a character

Example 1:

Input: word1 = "horse", word2 = "ros" Output: 3 Explanation: horse -> rorse
(replace 'h' with 'r') rorse -> rose (remove 'r') rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution" Output: 5 Explanation: intention
-> inention (remove 't') inention -> enention (replace 'i' with 'e') enention ->
exention (replace 'n' with 'x') exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

Constraints:

0 <= word1.length, word2.length <= 500 word1 and word2 consist of lowercase
English letters. */
// recursive explanation:
// https://leetcode.com/problems/edit-distance/discuss/25895/Step-by-step-explanation-of-how-to-optimize-the-solution-from-simple-recursion-to-DP

/*
  Without memo:
  Time: O(3^n), each recursion tree has 3 children if the words are totally
  different
  Space: O(1)

  With memo:
  Time: O(word1.length * word2.length) since you only need to calculate each
  branch once
  Space: O(word1.length * word2.length) for the memo
*/
const minDistance = (word1, word2) => {
  const memo = new Map();

  const backtrack = (index1, index2) => {
    // base cases
    if (index1 === word1.length) return word2.length - index2;
    if (index2 === word2.length) return word1.length - index1;

    const key = `${index1}:${index2}`;
    if (memo.has(key)) return memo.get(key);

    // enumerate decisions
    let total = 0;

    // Only make changes if the characters at the indices don't match!
    if (word1[index1] === word2[index2]) {
      total = backtrack(index1 + 1, index2 + 1);
    } else {
      // Instead of slicing and passing a new word down, just keep track of the
      // indices

      // Inserting a letter to word1 is the same as skipping that letter in word2
      const insert = backtrack(index1, index2 + 1);
      // Removing a letter in word1 it the same as skipping that letter in word1
      const remove = backtrack(index1 + 1, index2);
      // Replacing a letter is the same as just moving forward in both words
      const replace = backtrack(index1 + 1, index2 + 1);

      total = Math.min(Math.min(insert, remove), replace) + 1;
    }

    memo.set(key, total);
    // return winner
    return total;
  };

  return backtrack(0, 0);
};

const minDistanceBottomUp = (word1, word2) => {
  const matched = Array(word1.length + 1).fill([]);
  for (let i = 0; i <= word1.length; i += 1) {
    matched[i][0] = i;
  }

  for (let i = 0; i <= word2.length; i += 1) {
    matched[0][i] = i;
  }

  for (let i = 0; i < word1.length; i += 1) {
    for (let j = 0; j < word2.length; j += 1) {
      if (word1[i] === word2[j]) {
        matched[i + 1][j + 1] = matched[i][j];
      } else {
        matched[i + 1][j + 1] = Math.min(
          Math.min(matched[i][j + 1], matched[i + 1][j]), matched[i][j],
        ) + 1;
      }
    }
  }

  return matched[word1.length][word2.length];
};

minDistanceBottomUp('horse', 'ros');
