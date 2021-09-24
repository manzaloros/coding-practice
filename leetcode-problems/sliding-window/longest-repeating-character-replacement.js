const characterReplacement = (s, k) => {
  /* inst map {char: freq}
start left, right at 0
start counter at 0 */
  const map = new Map();
  let [left, right] = [0, 0];
  let frequencyOfMostFrequentChar = 0;
  let max = 0;

  while (right < s.length) {
    // increase size of window, unless counter === k
    // when map length > 1, increase counter
    const rChar = s[right];

    map.set(rChar, (map.get(rChar) || 0) + 1);

    // update count of most frequent char if newly added right char is more frequent
    frequencyOfMostFrequentChar = Math.max(frequencyOfMostFrequentChar, map.get(rChar));

    // while window is too big
    while (right - left + 1 - frequencyOfMostFrequentChar > k) {
      // the char just added at right makes window invalid
      // move left forward, removing chars.
      // move left forward until the removed char freq matches the counter
      // shrink window

      const lChar = s[left];

      map.set(lChar, map.get(lChar) - 1);

      left += 1;
    }

    // update max window size
    max = Math.max(max, right - left + 1);

    right += 1;
  }

  return max;
};

const characterReplacementLC = (s, k) => {
  const map = new Map();

  let [start, end] = [0, 0];
  let maxCount = 0;
  let maxLength = 0;

  const windowSize = (i, j) => j - i + 1;

  const numOfCharsReplaced = (i, j, mostFreqCharCount) => windowSize(i, j) - mostFreqCharCount;

  while (end < s.length) {
    const endChar = s[end];

    if (!map.has(endChar)) map.set(endChar, 0);
    map.set(endChar, map.get(endChar) + 1);

    maxCount = Math.max(maxCount, map.get(endChar));

    while (numOfCharsReplaced(start, end, maxCount) > k) {
      const startChar = s[start];

      if (map.get(startChar) === 1) {
        map.delete(startChar);
      } else {
        map.set(startChar, map.get(startChar) - 1);
      }

      start += 1;
    }

    maxLength = Math.max(maxLength, windowSize(start, end));

    end += 1;
  }

  return maxLength;
};

characterReplacement('ABAB', 2);
