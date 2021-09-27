/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let characterReplacement = function (s, k) {
  const map = new Map();
  let mostFreqCharFreq = 0;

  let [start, end] = [0, 0];
  let maxLength = 0;

  const windowSize = () => end - start + 1;

  while (end < s.length) {
    const endChar = s[end];

    map.set(endChar, (map.get(endChar) || 0) + 1);

    mostFreqCharFreq = Math.max(mostFreqCharFreq, map.get(endChar));

    while (windowSize() - mostFreqCharFreq > k) {
      const startChar = s[start];
      // if (map.get(startChar) === 1) {
      //   map.delete(startChar);
      // } else {
      //   map.set(startChar, map.get(startChar) - 1);
      // }
      map.set(startChar, map.get(startChar) - 1);

      start += 1;
    }

    maxLength = Math.max(maxLength, windowSize());
    end += 1;
  }

  return maxLength;
};

characterReplacement('AABABBA', 1);
