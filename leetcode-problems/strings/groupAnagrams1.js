// Time: O(strs.length * (maxWordLength * log maxWordLength))
// if max word length is 100, O(strs.length).
// Space: O(strs.length) for new map
const groupAnagrams = (strs) => [...strs.reduce((map, word) => {
      const sorted = word.split('').sort().join('');
      
      if (!map.has(sorted)) map.set(sorted, []);
      map.get(sorted).push(word);
          
    return map;
    }, new Map()).values()];
