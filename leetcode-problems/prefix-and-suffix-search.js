/* Prefix and Suffix Search

Solution Design a special dictionary which has some words and allows you to
search the words in it by a prefix and a suffix.

Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the
dictionary.  f(string prefix, string suffix) Returns the index of the word in
the dictionary which has the prefix prefix and the suffix suffix. If there is
more than one valid index, return the largest of them. If there is no such word
in the dictionary, return -1.

Example 1:

Input ["WordFilter", "f"] [[["apple"]], ["a", "e"]] Output [null, 0]

Explanation WordFilter wordFilter = new WordFilter(["apple"]); wordFilter.f("a",
"e"); // return 0, because the word at index 0 has prefix = "a" and suffix =
'e".

Constraints:

1 <= words.length <= 15000 1 <= words[i].length <= 10 1 <= prefix.length,
suffix.length <= 10 words[i], prefix and suffix consist of lower-case English
letters only.  At most 15000 calls will be made to the function f.  Hide Hint #1
For a word like "test", consider "#test", "t#test", "st#test", "est#test",
"test#test". Then if we have a query like prefix = "te", suffix = "t", we can
find it by searching for something we've inserted starting with "t#te". */

class WordFilter {
  constructor(words) {
    this.words = words;
  }

  f(prefix, suffix) {
    let largestIndex = -1;

    for (let i = 0; i < this.words.length; i += 1) {
      let match = true;

      for (let j = 0; j < prefix.length; j += 1) {
        if (this.words[i][j] !== prefix[j]) {
          match = false;
          break;
        }
      }

      for (let j = suffix.length - 1; j > 0; j -= 1) {
        if (this.words[i][j + (this.words[i].length - suffix.length)] !== suffix[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        largestIndex = Math.max(largestIndex, i);
      }
    }

    return largestIndex >= 0 ? largestIndex : -1;
  }
}

const w = new WordFilter(['cabaabaaaa', 'ccbcababac', 'bacaabccba', 'bcbbcbacaa', 'abcaccbcaa', 'accabaccaa', 'cabcbbbcca', 'ababccabcb', 'caccbbcbab', 'bccbacbcba']);
w.f('a', 'aa');
// ,["ab","abcaccbcaa"],["a","aa"],["cabaaba","abaaaa"],["cacc","accbbcbab"],["ccbcab","bac"],["bac","cba"],["ac","accabaccaa"],["bcbb","aa"],["ccbca","cbcababac"]])
