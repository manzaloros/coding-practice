/* Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. */
const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let currentLongest = '';
  for (let c of s) {
    // indexOf seems to be faster than making a {} and tracking values?
    const index = currentLongest.indexOf(c);
    if (index !== -1) {
      currentLongest = currentLongest.substring(index + 1);
    }
    currentLongest += c;
    maxLength = Math.max(currentLongest.length, maxLength);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'), "should be 3");
console.log(lengthOfLongestSubstring('bbbbb'), "should be 1");
console.log(lengthOfLongestSubstring('pwwkew'), "should be 3");
console.log(lengthOfLongestSubstring(''), "should be 0");
console.log(lengthOfLongestSubstring(' '), "should be 1");