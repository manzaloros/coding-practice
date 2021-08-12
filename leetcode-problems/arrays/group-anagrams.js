// Time: O(length of strings * average length of strings * 26)
let groupAnagrams = function (strings) {
  if (strings.length === 0) return [['']];

  const answer = new Map();

  const aCode = 'a'.charCodeAt(0);
  const getCode = (char) => char.charCodeAt(0) - aCode;

  strings.forEach((string) => {
    const count = Array(26).fill(0);
    // const count = new Map();

    // O(string length)
    string.split('').forEach((char) => {
      const currentCode = getCode(char);
      count[currentCode] += 1;
    });
    // string.split('').forEach(char => {
    //   if (!count.has(char)) count.set(char, 0)
    //   count.set(char, count.get(char) + 1)
    // });

    // Iterate through all lowercase letters and make a unique key for the
    // current word.
    // For this part, you could always make a unique by making each char map to
    // a prime number, then you could literally just sum up the strings and
    // compare sums to see if they map. Unfortunately I'll never remember how to
    // make that unique prime number, so this method works just fine.
    let key = '';
    for (let i = 0; i < 26; i += 1) {
      key += '#';
      key += count[i];
    }
    // [...count].sort((a, b) => a < b ? -1 : 1).forEach(char => key += `#${char}`);

    if (!answer.has(key)) answer.set(key, []);
    answer.get(key).push(string);
  });

  // Make an array from the map values
  return Array.from(answer.values());
};
