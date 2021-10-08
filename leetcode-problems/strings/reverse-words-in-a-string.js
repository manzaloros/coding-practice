/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function (s) {
  const arr = s.split('');

  const sCode = ' '.charCodeAt(0);
  const isSpace = (char) => char.charCodeAt(0) === sCode;
  const inBounds = (i) => i < arr.length;

  const reverse = (i, j) => {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
      j -= 1;
    }
  };

  reverse(0, arr.length - 1);

  let i = 0;
  while (inBounds(i)) {
    const char = arr[i];
    let j = i;

    if (isSpace(char)) {
      i += 1;
    } else {
      while (inBounds(j + 1) && !isSpace(arr[j + 1])) j += 1;
      reverse(i, j);
      i = j + 1;
    }
  }

  i = 0;
  let output = '';
  while (isSpace(arr[i])) i += 1;

  while (inBounds(i)) {
    const char = arr[i];
    if (!isSpace(char)) {
      output += char;
    } else if (inBounds(i + 1) && !isSpace(arr[i + 1])) {
      output += char;
    }

    i += 1;
  }

  return output;
};
