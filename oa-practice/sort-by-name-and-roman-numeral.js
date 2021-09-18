const sortNames = (names) => {
  const romanToInt = (roman) => {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let int = 0;

    for (let i = 0; i < roman.length; i += 1) {
      const num = map[roman[i]];

      if (i === roman.length - 1) {
        int += num;
      } else {
        const next = map[roman[i + 1]];

        if (num < next) {
          int += (next - num);
          i += 1;
        } else {
          int += num;
        }
      }
    }

    return int;
  };

  const sortByRoman = (a, b) => {
    a = a.split(' ');
    b = b.split(' ');

    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;

    if (romanToInt(a[1]) < romanToInt(b[1])) return -1;
    return 1;
  };

  return names.sort(sortByRoman);
};

// sortNames(['Louis V', 'Louis VI', 'Louis X', 'Peter I']);
sortNames(['Louis V', 'Louis IX', 'Louis X', 'Peter I']);
