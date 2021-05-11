/* Given a string s, determine if it is a palindrome, considering only
alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama" Output: true Explanation:
"amanaplanacanalpanama" is a palindrome.  Example 2:

Input: s = "race a car" Output: false Explanation: "raceacar" is not a
palindrome.

Constraints:

1 <= s.length <= 2 * 105 s consists only of printable ASCII characters.
 */

const isAlphanumeric = (char) => {
  if ((char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58)
    || (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)
    || (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)) {
    return true;
  }

  return false;
};

const isUpperCase = (char) => {
  if (char.charCodeAt(0) < 91) return true;
  return false;
};

const isPalindrome = (s) => {
  for (let i = 0, j = s.length - 1; i < s.length; i += 1, j -= 1) {
    while (i < s.length && !isAlphanumeric(s.charAt(i))) {
      i += 1;
    }
    while (j >= 0 && !isAlphanumeric(s.charAt(j))) {
      j -= 1;
    }
    if (isUpperCase(s.charAt(i)) && isUpperCase(s.charAt(j))) {
      if (s.charAt(i) !== s.charAt(j)) return false;
    } else if (!isUpperCase(s.charAt(i)) && !isUpperCase(s.charAt(j))) {
      if (s.charAt(i) !== s.charAt(j)) return false;
    } else if (!isUpperCase(s.charAt(i))) {
      if ((s.charCodeAt(i) - 32) !== s.charCodeAt(j)) return false;
    } else if (!isUpperCase(s.charAt(j))) {
      if ((s.charCodeAt(j) - 32) !== s.charCodeAt(i)) return false;
    }
  }
  return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome(' ')); // true
