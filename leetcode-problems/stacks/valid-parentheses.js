/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'. */

const isValid = (s) => {
  const stack = [];
  const map = new Map().set('[', ']').set('{', '}').set('(', ')');
  const set = new Set().add('[').add('{').add('(');

  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];

    if (set.has(current)) {
      stack.push(current);
    } else {
      const item = stack.pop();

      if (map.get(item) !== current) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}'));

/*
stack =
  i 1
  item: (
  current: )
*/
