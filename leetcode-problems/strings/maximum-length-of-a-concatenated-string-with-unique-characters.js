/**
 * @param {string[]} arr
 * @return {number}
 */
let maxLength = function (arr) {
  // const counts = Array(26).fill(0);
  const counts = new Set();

  // const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

  const backtrack = (index) => {
    if (index > arr.length - 1) return 0;

    const chars = arr[index].split('');

    let choose = 0;
    chars.forEach((char) => {
      if (counts.has(char)) choose = -Infinity;
    });

    if (choose === 0) {
      chars.forEach((char) => {
        if (counts.has(char)) choose = -Infinity;
        counts.add(char);
      });

      choose = choose === -Infinity ? -Infinity : chars.length + backtrack(index + 1);

      chars.forEach((char) => {
        counts.delete(char);
      });
    }

    let notChoose = backtrack(index + 1);

    return Math.max(choose, notChoose);
  };

  return backtrack(0);
};

maxLength(['un', 'iq', 'ue']);
