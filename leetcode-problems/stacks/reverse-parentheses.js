let reverseParentheses = function (s) {
  let stack = [];

  s.split('').forEach((char) => {
    if (char === ')') {
      let curr = '';
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        curr += stack.pop();
      }
      // pop (
      stack.pop();
      let i = 0;
      while (i < curr.length) {
        stack.push(curr[i]);
        i += 1;
      }
    } else {
      stack.push(char);
    }
  });

  return stack.join('');
};
