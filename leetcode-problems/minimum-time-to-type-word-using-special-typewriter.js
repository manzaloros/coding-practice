/**
 * @param {string} word
 * @return {number}
 */
let minTimeToType = function (s) {
  let curr = 'a';
  let counter = 0;

  const getMinDistance = (curr, dest) => {
    let currCode = curr.charCodeAt(0);
    let destCode = dest.charCodeAt(0);
    let val = Math.abs(destCode - currCode);

    return Math.min(
      val, // destination - current
      26 - val, // how far away from (destination - current) 26 is
    );
  };

  s.split('').forEach((char) => {
    counter += getMinDistance(curr, char) + 1;
    curr = char;
  });

  return counter;
};

minTimeToType('bza');
