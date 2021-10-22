let reverseWords = function (s) {
  const split = s.split('');
  const { length: n } = split;
  let reversed = '';

  const reverse = (i, j) => {
    while (i < j) {
      [split[i], split[j]] = [split[j], split[i]];
      i += 1;
      j -= 1;
    }
  };

  let i = 0;
  while (split[i] === ' ') i += 1;

  reverse(i, split.length - 1);

  i = 0;
  while (i < n) {
    while (i < n - 1 && split[i] === ' ') {
      i += 1;
    }

    // next char is a word or end of string
    // if not at end of string

    let j = i;
    while (j < n - 1 && split[j + 1] !== ' ') {
      j += 1;
    }
    reverse(i, j);

    while (i < n && split[i] !== ' ') {
      reversed += split[i];
      i += 1;
    }

    i = j;

    if (i !== n - 1) reversed += ' ';

    i += 1;
  }

  return reversed;
};

const reverseWordsBuiltInMethods = function (s) {
  return s
    .split(' ')
    .reverse()
    .filter((word) => word !== '')
    .join(' ');
};

reverseWordsBuiltInMethods('blue     sky');
