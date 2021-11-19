/**
 * @param {string} s
 * @return {boolean}
 if even length, all chars must have even freq?
 if odd, one char must have odd freq?
 */
let canPermutePalindrome = function (s) {
  const freq = s.split('').reduce((map, char) => {
    map.set(char, (map.get(char) || 0) + 1);
    return map;
  }, new Map());

  let [isEven, oddFound] = [s.length % 2 === 0, false];

  return Array.from(freq).reduce((ans, [char, count]) => {
    if (count % 2 !== 0) {
      if (isEven || (!isEven && oddFound)) ans = false;

      oddFound = true;
    }

    return ans;
  }, true);
};
