const groupAnagrams = (strings) => {
  // O( length of strings)
  const anagrams = new Map();

  //
  strings.forEach((str) => {
    const split = str.split('');
    const sorted = split.sort((a, b) => (a < b ? -1 : 1));
    const joined = sorted.join('');

    if (!anagrams.has(joined)) anagrams.set(joined, []);

    const currAnagrams = anagrams.get(joined);
    currAnagrams.push(str);
  });

  const anagramList = [];

  anagrams.forEach((currAnagrams, sorted) => {
    anagramList.push(currAnagrams);
  });

  return anagramList;
};

const groupAnagramsByCount = (strings) => {
  const ans = new Map();

  let count = Array(26).fill(0);
  const a = 'a'.charCodeAt(0);

  strings.forEach((string) => {
    count = count.fill(0);

    string.split('').forEach((char) => { count[char.charCodeAt(0) - a] += 1; });

    // Makes a unique key with 26 spots that are 0 or their character count,
    // separated by '#'
    let key = '';
    for (let i = 0; i < 26; i += 1) {
      key += '#';
      key += count[i];
    }

    if (!ans.has(key)) ans.set(key, []);
    ans.get(key).push(string);
  });

  return Array.from(ans.values());
};

groupAnagramsByCount(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
