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

    const left = s.charAt(i);
    const leftCode = s.charCodeAt(i);
    const right = s.charAt(j);
    const rightCode = s.charCodeAt(j);

    if (isUpperCase(left) && isUpperCase(right)) {
      if (left !== right) return false;
    } else if (!isUpperCase(left) && !isUpperCase(right)) {
      if (left !== right) return false;
    } else if (!isUpperCase(left)) {
      if ((leftCode - 32) !== rightCode) return false;
    } else if (!isUpperCase(right)) {
      if ((rightCode - 32) !== leftCode) return false;
    }
  }
  return true;
};

/*
Two pointer technique to work inward from the left and right
*/
const isLetter = (s) => s.match(/[a-z0-9]/);

const isPalindromeNotStupid = (s, [start, end] = [0, s.length - 1]) => {
  while (start < end) {
    const [left, right] = [s[start].toLowerCase(), s[end].toLowerCase()];
    if (!isLetter(left)) {
      start += 1;
      continue;
    }

    if (!isLetter(right)) {
      end -= 1;
      continue;
    }

    if (left !== right) return false;

    start += 1;
    end -= 1;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome(' ')); // true
