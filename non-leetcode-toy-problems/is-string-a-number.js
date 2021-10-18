/*
  any char other than e disqualifies
  any - other than index 0 disqualifies and if nothing appears after -
  no whitespace between chars

  1 1 not a num

   3.75e5 is a num
*/
const isThisANumber = (s) => {
  s = s.trim();

  const dotCode = '.'.charCodeAt(0);
  const eCode = 'e'.charCodeAt(0);
  const dashCode = '-'.charCodeAt(0);
  const whitespace = ' '.charCodeAt(0);

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const code = char.charCodeAt(0);

    // if char is not a num
    if (Number.isNaN(char)) {
      if (i === 0 && code !== dashCode && s.length === 1) return false;

      if (i === s.length - 1) return false;

      if ((code !== eCode || code !== dotCode) && (i === 0 && code !== dashCode)) return false;
    }
  }

  return true;
};

isThisANumber('10');
isThisANumber('-10');
isThisANumber('10.1');
isThisANumber('-10.1');
isThisANumber('1e5');
isThisANumber('a');
isThisANumber('x 1');
isThisANumber('a -2');
isThisANumber('-');
