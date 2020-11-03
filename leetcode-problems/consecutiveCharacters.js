/* Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.



Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
Example 3:

Input: s = "triplepillooooow"
Output: 5
Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11
Example 5:

Input: s = "tourist"
Output: 1


Constraints:

1 <= s.length <= 500
s contains only lowercase English letters. */

const maxPower = (s, [count, max] = [1, 1], { length } = s) => {
  // let maxLength = 0;
  // for (let i = 0; i < s.length; i += 1) {
  //   let [j, currMax] = [i + 1, 0];
  //   while (s[j] === s[i]) {
  //     j += 1;
  //   }
  //   maxLength = Math.max(maxLength, (j - i));
  //   i = j - 1;
  // }
  // return maxLength;

  for (let i = 0; i < length - 1; i += 1) {
    if (s[i] === s[i + 1]) {
      count += 1;
      if (count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
  }
  return max;
}

console.log(maxPower("tourist"))