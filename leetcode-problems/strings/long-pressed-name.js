/* Your friend is typing his name into a keyboard. Sometimes, when typing a
character c, the key might get long pressed, and the character will be typed 1
or more times.

You examine the typed characters of the keyboard. Return True if it is possible
that it was your friends name, with some characters (possibly none) being long
pressed.

Example 1:

Input: name = "alex", typed = "aaleex" Output: true Explanation: 'a' and 'e' in
'alex' were long pressed.  Example 2:

Input: name = "saeed", typed = "ssaaedd" Output: false Explanation: 'e' must
have been pressed twice, but it wasn't in the typed output.  Example 3:

Input: name = "leelee", typed = "lleeelee" Output: true Example 4:

Input: name = "laiden", typed = "laiden" Output: true Explanation: It's not
necessary to long press any character.

Constraints:

1 <= name.length <= 1000 1 <= typed.length <= 1000 name and typed contain only
lowercase English letters.
 */

const isLongPressedName = (name, typed) => {
  if (name === typed) return true;

  let jCount = 0;
  let iCount = 0;

  for (let i = 0, j = 0; i < name.length || j < typed.length; i += iCount, j += jCount) {
    if (name[i] !== typed[j]) return false;

    jCount = 0;
    iCount = 0;

    // Count repeated letters
    while (name[i + iCount] === name[i]) {
      iCount += 1;
    }

    while (typed[j + jCount] === typed[j]) {
      jCount += 1;
    }

    // If the typed letters don't account for the repeated letters in name
    if (jCount < iCount) return false;
  }

  return true;
};

// console.log(isLongPressedName('alex', 'aaleex'));
// console.log(isLongPressedName('saeed', 'ssaaedd'));
// console.log(isLongPressedName('leelee', 'lleeelee'));
// console.log(isLongPressedName('alex', 'aaleexa'));
console.log(isLongPressedName('alexd', 'ale'));
