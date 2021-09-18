/*
  Search for a pattern 'TWLO' which maps to a number (T9 keyboard) in list of
  phone numbers

  input: vanityCodes: ['TWLO','FLOWERS',.....] phoneNums:
  ['12345678',....]

  output: return list of numbers which have atleast one vanity
  code in them.
*/

const vanity = (codes, nums) => {
  const convert = (code) => {
    const table = {
      a: '2',
      b: '2',
      c: '2',
      d: '3',
      e: '3',
      f: '3',
      g: '4',
      h: '4',
      i: '4',
      j: '5',
      k: '5',
      l: '5',
      m: '6',
      n: '6',
      o: '6',
      p: '7',
      q: '7',
      r: '7',
      s: '7',
      t: '8',
      u: '8',
      v: '8',
      w: '9',
      x: '9',
      y: '9',
      z: '9',
    };

    return code.split('').map((char) => table[char]).join('');
  };

  let matches = [];

  // O(codes.length * (nums.length * num.length)) = O(codes.length * (nums.length))
  codes.forEach((code) => {
    // O(code.length)
    // returns string of code to num
    const codeNum = convert(code.toLowerCase());

    // O(nums.length * num.length)
    nums.forEach((num) => {
      // O(num.length)
      if (num.includes(codeNum)) matches.push(num);
    });
  });

  // remove duplicates
  matches = new Set(matches);
  matches = Array.from(matches);

  // O n log n
  return matches.sort((a, b) => (a < b ? -1 : 1));
};

vanity(['TWLO', 'CODE', 'HTCH'], ['+14157088956']);
