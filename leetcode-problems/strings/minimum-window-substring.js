/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/* let minWindow = (s, t) => {
  let [left, right] = [0, 0];
  const tMap = new Map();
  t.split('').forEach((char) => {
    tMap.set(char, tMap.get(char) ? tMap.get(char) + 1 : 1);
  });

  const windowMap = new Map();
  let formed = 0;
  let ans = [-1, 0, 0];

  while (right < s.length) {
    let char = s[right];

    windowMap.set(char, windowMap.get(char) ? windowMap.get(char) + 1 : 1);

    if (tMap.has(char) && windowMap.get(char) === tMap.get(char)) {
      formed += 1;
    }
    let correctlyFormed = formed;

    while (left <= right && formed) {
      char = s[left];

      if (ans[0] === -1 || (right - left + 1) < ans[0]) {
        ans = [(right - left) + 1, left, right];
      }

      windowMap.set(windowMap.get(char) - 1);

      if (tMap.has(char) && windowMap.get(char) < tMap.get(char)) formed -= 1;
      left += 1;
    }

    right += 1;
  }

  return ans[0] === -1 ? '' : s.substring(ans[1], ans[2] + 1);
}; */

let minWindowFromTemplate = (s, t) => {
  const map = new Map();

  // Get frequencies of chars in t
  t.split('').forEach((char) => {
    map.set(char, map.get(char) ? map.get(char) + 1 : 1);
  });

  // Counter is number of chars t found in s
  let [counter, start, end, minLength, minStart] = [t.length, 0, 0, Infinity, 0];

  while (end < s.length) {
    const windowEnd = s[end];
    // Decrease counter when you find a common character
    if (map.get(windowEnd) > 0) {
      counter -= 1;
    }

    // if char isn't in t, it will be negative
    map.set(windowEnd, (map.get(windowEnd) || 0) - 1);
    end += 1;

    // While there is a valid window, move start to make it smaller
    while (counter === 0) {
      const windowStart = s[start];

      if ((end - start) < minLength) {
        minStart = start;
        minLength = end - start;
      }

      map.set(windowStart, map.get(windowStart) + 1);

      // When the char exists in t, increase counter
      if (map.get(windowStart) > 0) {
        counter += 1;
      }

      start += 1;
    }
  }

  if (minLength !== Infinity) return s.substr(minStart, minLength);

  return '';
};

// minWindowFromTemplate('ADOBECODEBANC',
// 'ABC');
minWindowFromTemplate('a', 'aa');
