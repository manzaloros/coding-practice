/**
 * @param {number} n
 * @return {string[]}
 */

// Time: O(2n)
// Space: O(depth of call stack)
let generateParenthesis = function (n) {
  const validParens = [];

  const recurse = (currParens, openRemaining, closeRemaining) => {
    if (openRemaining === 0) {
      while (closeRemaining > 0) {
        currParens += ')';
        closeRemaining -= 1;
      }

      validParens.push(currParens);
    } else if (closeRemaining === openRemaining) {
      recurse(`${currParens}(`, openRemaining - 1, closeRemaining);
    } else {
      recurse(`${currParens})`, openRemaining, closeRemaining - 1);
      recurse(`${currParens}(`, openRemaining - 1, closeRemaining);
    }
  };

  recurse('(', n - 1, n);

  return validParens;
};

// O(n)
// Space O(n)
const generateParenthesisIterative = (n) => {
  const valids = [];
  const stack = [[n - 1, n, '(']];

  while (stack.length > 0) {
    let [open, close, current] = stack.pop();

    if (open === 0) {
      while (close > 0) {
        current += ')';
        close -= 1;
      }

      valids.push(current);
    } else if (open === close) {
      stack.push([open - 1, close, `${current}(`]);
    } else {
      stack.push([open - 1, close, `${current}(`]);

      stack.push([open, close - 1, `${current})`]);
    }
  }

  return valids;
};
