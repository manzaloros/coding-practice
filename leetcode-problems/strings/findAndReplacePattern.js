const findAndReplacePattern = (words, pattern) => {
  const result = [];
  const patternLength = pattern.length;

  words.forEach((w) => {
    let built = '';
    const patternMap = new Map();
    const wordMap = new Map();

    if (w.length === patternLength) {
      for (let i = 0; i < patternLength; i += 1) {
        const patternLetter = pattern[i];
        const letter = w[i];

        if (patternMap.has(letter)) {
          built += patternMap.get(letter);
          if (built !== pattern.substring(0, i + 1)) break;
        } else if (wordMap.has(patternLetter)) {
          break;
        } else {
          built += patternLetter;
          patternMap.set(letter, patternLetter);
          wordMap.set(patternLetter, letter);
        }
      }

      if (built === pattern) result.push(w);
    }
  });

  return result;
};

findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb');
