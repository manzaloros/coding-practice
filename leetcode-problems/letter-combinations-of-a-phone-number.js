// Just using subsets template
// Space: callstack O(n)
// Time: O(4^n * n)
let letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const map = new Map();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);

  let temp = '';
  const combos = [];

  const backtrack = (index) => {
    if (temp.length === digits.length) {
      combos.push(temp);
    } else {
      const letters = map.get(digits[index]);

      letters.forEach((letter) => {
        temp += letter;

        backtrack(index + 1);

        temp = temp.slice(0, -1);
      });
    }
  };

  backtrack(0);

  return combos;
};
