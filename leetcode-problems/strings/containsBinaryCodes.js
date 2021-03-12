/* Check If a String Contains All Binary Codes of Size K
Given a binary string s and an integer k.

Return True if every binary code of length k is a substring of s. Otherwise, return False.

Example 1:

Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indicies 0, 1, 3 and 2 respectively.
Example 2:

Input: s = "00110", k = 2
Output: true
Example 3:

Input: s = "0110", k = 1
Output: true
Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring.
Example 4:

Input: s = "0110", k = 2
Output: false
Explanation: The binary code "00" is of length 2 and doesn't exist in the array.
Example 5:

Input: s = "0000000001011100", k = 4
Output: false

Constraints:

1 <= s.length <= 5 * 10^5
s consists of 0's and 1's only.
1 <= k <= 20
*/

const hasAllCodes = (s, k) => {
  const combinations = new Set();

  const recurse = (str) => {
    if (str.length === k) {
      return combinations.add(str);
    }

    ['1', '0'].forEach((n) => recurse(n + str));
  };

  recurse('');

  let numLeft = combinations.size;
  for (let i = 0; i <= s.length - k; i += 1) {
    const substring = s.substring(i, i + k);
    if (combinations.has(substring)) {
      numLeft -= 1;
      combinations.delete(substring);
    }
    if (numLeft <= 0) return true;
  }
  return false;
};

hasAllCodes('01', 1);
hasAllCodes('0000000001011100', 4);
// hasAllCodes('000011010111011001001111111001000100100100010100101100001101101101110001100100101111100111001001111001001010111010010101101001001110011100110101001001001000000110101001010011101100110110100010000', 7);
