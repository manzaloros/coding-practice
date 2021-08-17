/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstringTwoDistinct = function (s) {
  // tracks char frequencies in window
  const map = new Map();

  let [counter, start, end, maxLength] = [0, 0, 0, 0];

  while (end < s.length) {
    const windowEnd = s[end];

    // Increase character when a new distinct character is found
    if (map.get(windowEnd) === undefined || map.get(windowEnd) === 0) {
      counter += 1;
    }

    // Increase count of character in window
    map.set(windowEnd, (map.get(windowEnd) || 0) + 1);

    end += 1;

    // While there are more than 2 distinct characters in map
    while (counter > 2) {
      const windowStart = s[start];

      // If you will be losing a distinct character by decreasing the window
      // size, decrement counter
      if (map.get(windowStart) === 1) {
        counter -= 1;
      }

      map.set(windowStart, map.get(windowStart) - 1);

      // decrease window from the start
      start += 1;
    }

    // Update the max after every movement of end and after adjusting window
    // size by moving start
    maxLength = Math.max(maxLength, end - start);
  }

  return maxLength;
};

lengthOfLongestSubstringTwoDistinct('eceba');
