/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
let addOperators = function (num, target) {
  const result = [];
  const arr = num.split('');

  if (!num || num.length === 0) return result;

  const helper = (path, pos, evaluated, multed) => {
    if (pos === num.length) {
      if (evaluated === target) result.push(path);
    } else {
      for (let i = pos; i < num.length; i += 1) {
        const curr = Number.parseInt(num.substring(pos, i + 1), 10);

        if (i !== pos && num[pos] === '0') break;

        if (pos === 0) {
          helper(path + curr, i + 1, curr, curr);
        } else {
          helper(`${path}+${curr}`, i + 1, evaluated + curr, curr);
          helper(`${path}-${curr}`, i + 1, evaluated - curr, -curr);
          helper(`${path}*${curr}`, i + 1, evaluated - multed + multed * curr, multed * curr);
        }
      }
    }
  };

  helper('', 0, 0, 0);

  return result;
};

// addOperators('123', 6);
// addOperators('105', 5);
addOperators('3456237490', 9191);
