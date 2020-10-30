const isSubsequence = (possibleSubstring, string, { length } = possibleSubstring, [i, j] = [0, 0]) => {
  while (i < length) {
    if (possibleSubstring[i] === string[j]) {
      i += 1;
    }
    j += 1;
  }
  return i === length;
}

console.log(isSubsequence('hello', 'hello world'));