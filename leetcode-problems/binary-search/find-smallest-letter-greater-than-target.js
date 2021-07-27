/* Given a characters array letters that is sorted in non-decreasing order and a
character target, return the smallest character in the array that is larger than
target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

Example 1:

Input: letters = ["c","f","j"], target = "a" Output: "c" Example 2:

Input: letters = ["c","f","j"], target = "c" Output: "f" Example 3:

Input: letters = ["c","f","j"], target = "d" Output: "f" Example 4:

Input: letters = ["c","f","j"], target = "g" Output: "j" Example 5:

Input: letters = ["c","f","j"], target = "j" Output: "c"

Constraints:

2 <= letters.length <= 104 letters[i] is a lowercase English letter.  letters is
sorted in non-decreasing order.  letters contains at least two different
characters.  target is a lowercase English letter. */

/*
Non decreasing means each element is greater than OR EQUAL TO the one before it
input: array of string characters and char target
output: char rep. smallest char that's larger than target

LETTERS WRAP AROUND

[dmo], e => m?
[wrx], y => w?
[ab], z => a?

l . r
m
[3, 6, 10], 4

l  r
m
[1,2], 26

l
  m r
[wrx], y

Binary search for char code until mid = target OR left = right
if the target is > right, then return left since it wraps around
*/

// Time: O(log num of letters)
// Space: O(1)
// BS template 2
const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;

  if (target >= letters[right]) return letters[left];

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[left];
};

// nextGreatestLetter(['w', 'r', 'x'], 'y');
// nextGreatestLetter(['c', 'f', 'j'], 'j');
// nextGreatestLetter(['c', 'f', 'j'], 'a');
nextGreatestLetter(['c', 'f', 'j'], 'c');
