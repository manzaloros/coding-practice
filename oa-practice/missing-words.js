/* Given two strings, one is a subsequence if all of the elements of the first
string occur in the same order within the second string.  They do not have to be
contiguous in the second string, but order must be maintained.  For example,
given the string "I like cheese", the words "I" and "cheese" are one possible
subsequence of that string.

In this challenge, you will be given two strings, s and t, where t is a
subsequence of s, report the words of s, missing in t, in order they are
missing.  Revisiting the earlier example, if s = I like cheese and t = like,
then like is the longest subsequence, and [I, cheese] is the list of missing
words in order.

Function Description: Complete the function missingWords in the editor below.
It must return an array of strings containing any words in s that are missing
from t in the order they occur within s.

missingWords has the following parameter(s): s: a sentence of space separated
words t: a sentence of space separated words

Constraints:

Strings s and t consists of English alphabetic letters and spaces only.  1 <=
|t| < |s| 10^6 1 <= length of any word in s or t <= 15 It is guaranteed that
string t is a subsequence of string s.  Input Format: Input from stdin will be
processes as follows and passed to the function The first line contains a string
s. The second line contains a string t.

Sample Input 0: I am using HackerRank to improve programming am HackerRank to
improve

Sample Output 0: I using programming

Explanation 0: The missing words are:
1. I
2. using
3. programming

We add these words in order to the array ["I", "using", "programming"], then
return this array as our answer.

Sample Input 1: I love programming programming

Sample Output 1: I love

Explanation 1: The missing words are:
1. I
2. love

We add these words in order to the array ["I", "love"], then return this array
as our answer.  */

const missingWords = (s, t) => {
  const missing = [];
  let i = 0;
  s = s.split(' ');

  t.split(' ').forEach((word) => {
    while (s[i] !== word) {
      missing.push(s[i]);
      i += 1;
    }

    i += 1;
  });

  return missing.concat(s.slice(i));
};

// missingWords('I am using HackerRank to improve programming',
// 'am HackerRank to improve');

missingWords('I love programming', 'programming');
