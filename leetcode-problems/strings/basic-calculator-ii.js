/* Given a string s which represents an expression, evaluate this expression and
return its value.

The integer division should truncate toward zero.

Note: You are not allowed to use any built-in function which evaluates strings
as mathematical expressions, such as eval().

Example 1:

Input: s = "3+2*2" Output: 7 Example 2:

Input: s = " 3/2 " Output: 1 Example 3:

Input: s = " 3+5 / 2 " Output: 5

Constraints:

1 <= s.length <= 3 * 105 s consists of integers and operators ('+', '-', '*',
'/') separated by some number of spaces.  s represents a valid expression.  All
the integers in the expression are non-negative integers in the range [0, 231 -
1].  The answer is guaranteed to fit in a 32-bit integer.
 */
const calculate = (s, { length } = s) => {
  if (!s || length === 0) return 0;

  let currentNum = 0;
  let lastNum = 0;
  // result acts as the stack added up
  let result = 0;
  let operation = '+';

  for (let i = 0; i < length; i += 1) {
    const currentChar = s[i];

    // if character is a number
    if (!isNaN(currentChar) && currentChar !== ' ') {
      currentNum = (currentNum * 10) + +currentChar;
    }
    // if char is an operation OR it's a number and the last character
    if ((!!isNaN(currentChar) && currentChar !== ' ') || i === length - 1) {
      if (operation === '+' || operation === '-') {
        result += lastNum;
        lastNum = (operation === '+') ? currentNum : -currentNum;
      } else if (operation === '*') {
        lastNum *= currentNum;
      } else if (operation === '/') {
        lastNum /= currentNum;
        lastNum = Math.trunc(lastNum);
      }

      operation = currentChar;
      // We've processed the digit, it we are at the end of the number, so reset
      // to 0 for next number we come across
      currentNum = 0;
    }
  }

  result += lastNum;
  return result;
};

console.log(calculate('3+2*2'));
