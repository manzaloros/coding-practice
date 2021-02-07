/*
Given a string s and a character c that occurs in s, return an array of integers
answer where answer.length == s.length and answer[i] is the shortest distance
from s[i] to the character c in s.

Example 1:

Input: s = "loveleetcode", c = "e" Output: [3,2,1,0,1,0,0,1,2,2,1,0] Example 2:

Input: s = "aaab", c = "b" Output: [3,2,1,0]

Constraints:

1 <= s.length <= 104 s[i] and c are lowercase English letters. c occurs at least
once in s.
*/

const shortestToChar = (s, c) => {
  const { length } = s;
  const ans = Array(length);
  // If the first element of the word is the matching character, set the first
  // element of the array as 0, otherwise, set it to 10001, which is (10^4) + 1.
  // 10^4 is the max length of the word.
  ans[0] = s.charAt(0) === c ? 0 : 10001;

  // loop through the string, starting at index 1. If the current character is a
  // match, set the current array element as 0, otherwise, set it as whatever
  // the previous element is plus 1
  for (let i = 1; i < length; i += 1) {
    ans[i] = s.charAt(i) === c ? 0 : ans[i - 1] + 1;
  }

  // while ~i evaluates to `true`, same as `i >= 0`
  // Loop backwards through the array, starting at the second to last element.
  // Set each array element as the lesser of the current element OR the next
  // index plus 1
  for (let i = length - 2; i >= 0; i -= 1) {
    ans[i] = Math.min(ans[i], ans[i + 1] + 1);
  }
  return ans;
};

console.log(shortestToChar('loveleetcode', 'e'));
