/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get
t.

All occurrences of a character must be replaced with another character while
preserving the order of characters. No two characters may map to the same
character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add" Output: true Example 2:

Input: s = "foo", t = "bar" Output: false Example 3:

Input: s = "paper", t = "title" Output: true

Constraints:

1 <= s.length <= 5 * 104 t.length == s.length s and t consist of any valid ascii
character.
 */

const isIsomorphic = (s, t) => {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (!sMap.has(char)) {
      if (tMap.has(t[i])) return false;

      sMap.set(char, t[i]);
      tMap.set(t[i], char);
    }

    if (sMap.get(char) !== t[i]) return false;
  }

  return true;
};

isIsomorphic('badc', 'baba');
// isIsomorphic('bbbaaaba', 'aaabbbba');
