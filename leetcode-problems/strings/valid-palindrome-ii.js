/*
Given a string s, return true if the s can be palindrome after deleting at most
one character from it.

Example 1:

Input: s = "aba" Output: true Example 2:

Input: s = "abca" Output: true Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc" Output: false

Constraints:

1 <= s.length <= 105 s consists of lowercase English letters. */

const validPalindrome = (s, { length } = s) => {
  let skipped = false;
  let leftCheck = true;
  for (let i = 0, j = length - 1; i <= j; i += 1, j -= 1) {
    if (s[i] !== s[j] && !skipped) {
      i -= 1;
      skipped = true;
    } else if (skipped) {
      if (s[i] !== s[j]) leftCheck = false;
    }
  }

  let rightCheck = true;
  skipped = false;
  for (let i = 0, j = length - 1; i <= j; i += 1, j -= 1) {
    if (s[i] !== s[j] && !skipped) {
      j += 1;
      skipped = true;
    } else if (skipped && s[i] !== s[j]) rightCheck = false;
  }

  return leftCheck || rightCheck;
};

const validPalindromeAlternate = (s, { length } = s) => {
  const isValid = (start, end) => {
    for (let i = start, j = end; i < j; i += 1, j -= 1) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0, j = length - 1; i < j; i += 1, j -= 1) {
    if (s[i] !== s[j]) {
      if (j > 0 && isValid(i, j - 1)) {
        return true;
      }

      if (i + 1 < length / 2 && isValid(i + 1, j)) {
        return true;
      }

      return false;
    }
  }

  return true;
};

console.log(validPalindrome('aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'));
console.log(validPalindrome('tcaac'));
console.log(validPalindrome('abc'));
