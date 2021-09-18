/**
 * @param {string} s
 * @return {string}
 */
// O(n^2)
let reverseParenthesesMine = function (s) {
  const stack = [];

  let i = 0;

  while (i < s.length) {
    const char = s[i];
    if (char === ')') {
      let curr = '';
      let popped = '';

      while (popped !== '(') {
        popped = stack.pop();
        if (popped !== '(') curr += popped;
      }

      let j = 0;
      while (j < curr.length) {
        stack.push(curr[j]);
        j += 1;
      }
    } else {
      stack.push(char);
    }
    i += 1;
  }

  return stack.join('');
};

// O(n), two-pass
const reverseParentheses = (s) => {
  const { length } = s;

  const stack = [];
  const pair = [];

  s.split('').forEach((char, i) => {
    if (char === '(') stack.push(i);
    if (char === ')') {
      // Swap the indexes of the matching parens. So the closing parens will be
      // the index of the opening parens, and vice versa
      let j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  });

  let res = '';

  for (let i = 0, d = 1; i < length; i += d) {
    const char = s[i];
    if (char === '(' || char === ')') {
      // set i to be the index of the paren and iterate the opposite direction
      // you've been going.
      i = pair[i];
      d = -d;
    } else {
      res += s[i];
    }
  }

  return res;
};

reverseParentheses('(abcd)');
