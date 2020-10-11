/*

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

The smallest lexicographical order is an order relation where string s is smaller than t, given the first character of s (s1) is smaller than the first character of t (t1), or in case they are equivalent, the second character, etc.

So aaabbb is smaller than aaac because although the first three characters are equal, the fourth character b is smaller than the fourth character c.

For cbacdcbc, there are several options, since b and c are duplicates, you can decided which duplicates to remove.

You can't reorder characters! You just decide which duplicate to remove.

Example 1:

Input: s = "bcabc"
Output: "abc"

Example 2:

Input: s = "cbacdcbc"
Output: "acdb"


Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
 */

const removeDuplicateLetters = (s) => {
  const array = s.split("");
  // array.forEach(letter => count[letter] ? count[letter] += 1 : count[letter] = 1);
  /*
    Wrapping the reducer function in parentheses just return the contents as an object literal
    if you don't wrap in parentheses, it will be treated as a code block
  */
  const count = array.reduce((map, letter) => ({
    ...map,
    [letter]: (map[letter] || 0) + 1,
  }), {})
  const stack = [];
  const added = new Set();
  for (i = 0; i < array.length; i += 1) {
    const char = array[i];
    if (!added.has(char)) {
      /* While there are items in the stack
         and the current character is a lower alphabetical order than the top of the stack
         and the count of the current character from the word is > 0
      */
      while (stack.length > 0 && char < stack[stack.length - 1] && count[stack[stack.length - 1]]) {
        added.delete(stack.pop());
      }
      stack.push(char);
      added.add(char);
    }
    count[char] -= 1;
  }
  return stack.join('');
}

console.log(removeDuplicateLetters("bcabc")); //abc
// console.log(removeDuplicateLetters("leetcode")); // letcod