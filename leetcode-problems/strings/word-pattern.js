/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter
in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog" Output: true Example 2:

Input: pattern = "abba", s = "dog cat cat fish" Output: false Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog" Output: false Example 4:

Input: pattern = "abba", s = "dog dog dog dog" Output: false

Constraints:

1 <= pattern.length <= 300 pattern contains only lower-case English letters.  1
<= s.length <= 3000 s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.  All the words in s are
separated by a single space. */

const wordPattern = (pattern, s) => {
  const words = s.split(' ');
  if (words.length !== pattern.length) return false;

  const words2 = new Map();
  const map = new Map();

  for (let i = 0; i < pattern.length; i += 1) {
    if (words2.has(words[i]) && words2.get(words[i]) !== pattern[i]) return false;
    if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
    map.set(pattern[i], words[i]);
    words2.set(words[i], pattern[i]);
  }
  return true;
};

const wordPatternSingleHashIndexHashMap = (p, s) => {
  // Add '_char' at the front of each word in case the word is a single
  // character and it matches one of the characters of the pattern
  const words = s.split(' ').map((c) => `${c}_char`);

  if (words.length !== p.length) return false;

  const map = new Map();

  for (let i = 0; i < p.length; i += 1) {
    if (!map.has(p[i]) && !map.has(words[i])) {
      map.set(p[i], i);
      map.set(words[i], i);
    } else if (map.get(p[i]) !== map.get(words[i])) return false;
  }

  return true;
};

// console.log(wordPatternSingleHashIndexHashMap('abba', 'dog cat cat dog'));
// console.log(wordPatternSingleHashIndexHashMap('abba', 'dog cat cat fish'));
// console.log(wordPatternSingleHashIndexHashMap('abba', 'dog dog dog dog'));
console.log(wordPatternSingleHashIndexHashMap('abc', 'b c a'));
