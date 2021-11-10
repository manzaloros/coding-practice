/**
 * @param {string} s
 * @return {boolean}

 */
let checkValidString = function (s) {
  let [openMin, openMax] = [0, 0];

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (char === '(') {
      openMax += 1;
      openMin += 1;
    } else if (char === ')') {
      openMax -= 1;
      openMin -= 1;
    } else {
      openMax += 1;
      openMin -= 1;
    }

    if (openMax < 0) return false;

    openMin = Math.max(openMin, 0);
  }

  return openMin === 0;
};

// TLE
const checkValidStringRecursion = (s) => {
  let ans = false;
  let temp = [];

  const isValid = (chars) => {
    let balance = 0;

    chars.forEach((char) => {
      if (char === '(') balance += 1;
      else balance -= 1;
    });

    return balance === 0;
  };

  const generatePossibilities = (index) => {
    if (!ans) {
      if (index >= s.length) {
        ans = isValid(temp);
      } else {
        const char = s[index];

        if (char !== '*') {
          temp.push(char);
          generatePossibilities(index + 1);
        } else {
          temp.push('(');
          generatePossibilities(index + 1);
          temp.pop();

          temp.push(')');
          generatePossibilities(index + 1);
          temp.pop();

          generatePossibilities(index + 1);
        }
      }
    }
  };

  generatePossibilities(0);

  return ans;
};

// non memoized: O(3^n)
// Memoized TC: O(n ^ 2)
/*
  Every time you see an open, add one, closed -> subtract one.

  If you have the same number at end (the balance is 0) then it's valid
*/
const checkValidStringDP = (s) => {
  const memo = new Map();

  const backtrack = (index, open) => {
    if (index >= s.length) return open === 0;
    const key = `${index}:${open}`;

    if (memo.has(key)) return memo.get(key);

    const char = s[index];
    const nextIndex = index + 1;

    const possibilities = [];

    if (char === '(') {
      possibilities.push(backtrack(nextIndex, open + 1));
    } else if (char === ')') {
      // Can't start a string with ')'
      possibilities.push(open !== 0 && backtrack(nextIndex, open - 1));
    } else {
      possibilities.push(backtrack(nextIndex, open));
      possibilities.push(backtrack(nextIndex, open + 1));
      possibilities.push(open !== 0 && backtrack(nextIndex, open - 1));
    }

    const ans = possibilities.reduce((a, b) => a || b, false);
    memo.set(key, ans);

    return ans;
  };

  return backtrack(0, 0);
};

// checkValidStringDP('(*))');
checkValidStringDP(
  '(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())',
);
