/* Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another
expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the
expression would always evaluate to a result, and there will not be any division
by zero operation.

Example 1:

Input: tokens = ["2","1","+","3","*"] Output: 9 Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"] Output: 6 Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22 Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = ((10 * (6 /
(12 * -11))) + 17) + 5 = ((10 * (6 / -132)) + 17) + 5 = ((10 * 0) + 17) + 5 = (0
+ 17) + 5 = 17 + 5 = 22

Constraints:

1 <= tokens.length <= 104 tokens[i] is either an operator: "+", "-", "*", or
"/", or an integer in the range [-200, 200]. */

/*

5 + (17 + ())

*/
/*
O(n^2) TC
*/
const evalRPN = (tokens) => {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => Math.trunc(a / b),
    '*': (a, b) => a * b,
  };

  let currentPosition = 0;

  // O(n)
  while (tokens.length > 1) {
    while (!(tokens[currentPosition] in operators)) {
      currentPosition += 1;
    }

    const operator = tokens[currentPosition];
    const operation = operators[operator];
    const num1 = +tokens[currentPosition - 2];
    const num2 = +tokens[currentPosition - 1];

    tokens[currentPosition] = operation(num1, num2);

    // O(n)
    tokens.splice(currentPosition - 2, 2);
    currentPosition -= 1;
  }

  return tokens[0];
};

/*
O(n) TC
O(n) SC
*/
const evalRPNStack = (tokens) => {
  const stack = [];
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => Math.trunc(a / b),
    '*': (a, b) => a * b,
  };

  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];

    if (current in operators) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      // Order matters so make sure num1 and num2 are applied correctly
      const result = operators[current](+num1, +num2);
      stack.push(result);
    } else {
      // push if it's a number
      stack.push(current);
    }
  }

  return stack.pop();
};
