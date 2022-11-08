/*
  Lower case and upper case letters differ by 32 char codes.
  
  O(s.length) time and space
*/
const makeGood = function(s) {
  const stack = [];
  
  for (i = 0; i < s.length; i += 1) {
    if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0) === 32)) stack.pop();
    else stack.push(s[i]);
  }
  
  return stack.join('');
};
