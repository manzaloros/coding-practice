/*  Write a function that reverses a string. The input string is given as an
array of characters s.

Example 1:

Input: s = ["h","e","l","l","o"] Output: ["o","l","l","e","h"] Example 2:

Input: s = ["H","a","n","n","a","h"] Output: ["h","a","n","n","a","H"]

Constraints:

1 <= s.length <= 105 s[i] is a printable ascii character.

Follow up: Do not allocate extra space for another array. You must do this by
modifying the input array in-place with O(1) extra memory.

   Hide Hint #1 The entire logic for reversing a string is based on using the
opposite directional two-pointer approach! */

/*
  In place, but O(n) space because of call stack
*/
const reverseString = (s) => {
  const reverse = (beginning, end, array) => {
    if (beginning > end) {
      return;
    }

    [array[beginning], array[end]] = [array[end], array[beginning]];

    reverse(beginning + 1, end - 1, array);
  };

  reverse(0, s.length - 1, s);

  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
