const justify = (limit, str) => {
  const words = str.split(' ');
  const { length: totalNumberOfWords } = words;

  const lines = [];
  let index = 0;

  const lineWithWordWithinLimit = (lastWordInLineIndex,
    lineCharCount) => words[lastWordInLineIndex].length + lineCharCount + 1 <= limit;

  const inBounds = (i) => i < totalNumberOfWords;

  while (inBounds(index)) {
    let lineCharCount = words[index].length;
    let lastWordInLineIndex = index + 1;

    while (inBounds(lastWordInLineIndex)
      && lineWithWordWithinLimit(lastWordInLineIndex, lineCharCount)) {
      lineCharCount += words[lastWordInLineIndex].length + 1;
      lastWordInLineIndex += 1;
    }

    let currLine = '';
    let diff = lastWordInLineIndex - index - 1;

    if (lastWordInLineIndex === totalNumberOfWords || diff === 0) {
      for (let i = index; i < lastWordInLineIndex - 1; i += 1) {
        currLine += `${words[i]} `;
      }

      currLine += ' '.repeat(limit - currLine.length);
    } else {
      let spaces = Math.floor((limit - lineCharCount) / diff);
      let r = (limit - lineCharCount) % diff;

      for (let wordIndex = index;
        wordIndex < lastWordInLineIndex; wordIndex += 1) { // create current line
        currLine += words[wordIndex];

        if (wordIndex < lastWordInLineIndex - 1) { // add spaces if not the last word
          for (let j = 0; j <= (spaces + ((wordIndex - index) < r ? 1 : 0)); j += 1) {
            currLine += ' ';
          }
        }
      }
    }

    lines.push(currLine);
    index = lastWordInLineIndex;
  }

  return lines;
};

justify(25, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
