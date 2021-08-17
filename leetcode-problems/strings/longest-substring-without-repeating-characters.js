/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  const map = new Map();

  let [start, end, counter, maxLength] = [0, 0, 0, 0];

  while (end < s.length) {
    const windowEnd = s[end];
    const windowEndFreq = map.get(windowEnd);

    if (windowEndFreq >= 1) counter += 1;

    map.set(windowEnd, (windowEndFreq || 0) + 1);

    end += 1;

    while (counter !== 0) {
      const windowStart = s[start];
      const windowStartFreq = map.get(windowStart);

      if (windowStartFreq === 2) counter -= 1;

      map.set(windowStart, windowStartFreq - 1);

      start += 1;
    }

    maxLength = Math.max(maxLength, end - start);
  }

  return maxLength;
};
